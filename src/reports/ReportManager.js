import React, { useCallback, useState, useEffect } from "react";
import {app} from './base.js'
import { useRef } from "react";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const useCardStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    fontWeight: "normal",
  },
  pos: {
    marginBottom: 12,
  },
});  

const useCardContentStyles = makeStyles({
  cardcontent: {
    paddingTop: 5,
    paddingBottom: 0,
    paddingLeft: 15,
    paddingRight: 15,
    "&:last-child": {
      paddingBottom: 0
    }
  }
});

const useUploadStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default ({ reports: reports = [], onCreateNewReport: onCreateNewReport }) => {

    const classes = useStyles();
    const cardClasses = useCardStyles();
    const cardContentClasses = useCardContentStyles();
    const uploadClasses = useUploadStyles();

    const fileUpload = useRef(); // We bind this reference with Input for file upload via ref attribute
    const reportTitleTextfieldRef = useRef(null);
    const reportDescriptionTextfieldRef = useRef(null);
    const reportUrlTextfieldRef = useRef(null);

    var fileUrl;  //variable to receive full url of the file uploaded in Firebase Storage

    // UseStates. Whenever setter method is called screen re-renders with updated values
    const [newReportTitle, setNewReportTitle] = useState("");
    const [newReportDescription, setNewReportDescription] = useState("");
    const [newReportUrl, setNewReportUrl] = useState("");
    const [isTitleError, setIsTitleError] = useState(false);
    const [isDescriptionError, setIsDescriptionError] = useState(false);
    const [isUrlError, setIsUrlError] = useState(true);
    const [isInitialPageLoad, setIsInitialPageLoad] = useState(true);
    const [newTitleHelperText, setNewTitleHelperText] = useState("");
    const [newDescriptionHelperText, setNewDescriptionHelperText] = useState("");
    const [UrlHelperText, setUrlHelperText] = useState("Henüz dosya seçilmedi");

    const [radioValue, setRadioValue] = React.useState("file");

    const fileDivRef = useRef(null);
    const urlDivRef = useRef(null);

    const onNewReportUrlChange = useCallback((event) => {

      // take the chosen file in upload section
      const uploadedFile = fileUpload.current.files[0];

      if (uploadedFile) {
        setUrlHelperText("Dosya seçildi: " + uploadedFile.name);
        setIsUrlError(false);
      } 
      
    }, []);  


    // Upload button callback. Here I upload the file into Firebase Storage. But don't create/add item into Firebase Real
    // Time Database. I do that inside UseEffect only AFTER the file is uploaded and the url is received.
    const onAddReport = useCallback(
      (event) => {
        event.preventDefault();

        if (radioValue == "file") {
          // When button clicks check if TextField is empty and show error message. I actually handle this in useEffect
          // but had to do this here as well because at first start if no text is written inside TextField then
          // useEffect doesn't call as TextField vlaue is not changed.
          if (!newReportTitle) {
            setIsTitleError(true);
            setNewTitleHelperText("Title Error 2");
          } else {
            setIsTitleError(false);
            setNewTitleHelperText("");
          }
    
          if (!newReportDescription) {
            setIsDescriptionError(true);
            setNewDescriptionHelperText("Description Error 2");
          } else {
            setIsDescriptionError(false);
            setNewDescriptionHelperText("");
          }
    
          if (!newReportUrl) {
            setIsUrlError(true);
            console.log("Url is missing");
          } 

          // take the chosen file in upload section
          const file = fileUpload.current.files[0]

          if (file) {
            const storageRef = app.storage().ref();
            const fileRef = storageRef.child(file.name);

            fileRef.put(file).then(() => {
              console.log("Uploaded a file.")

              // Get url of the file uploaded in Firebase Storage and set it as Url of the report item inserted in
              // Firebase Realtime Database. This code block should be inside .then() method otherwise it will try
              // to assign the url value before file is even uploaded into the database which will give null error.
              fileRef.getDownloadURL().then((url) => {
                  fileUrl = url;
                  console.log(fileUrl.toString());
                  setNewReportUrl(fileUrl);
              });
            });
          }

          setNewReportTitle(reportTitleTextfieldRef.current.value);
          setNewReportDescription(reportDescriptionTextfieldRef.current.value);
          console.log(newReportTitle + " " + newReportDescription);

        } else if (radioValue == "url") {
          setNewReportTitle(reportTitleTextfieldRef.current.value);
          setNewReportDescription(reportDescriptionTextfieldRef.current.value);
          setNewReportUrl(reportUrlTextfieldRef.current.value);
          console.log(newReportTitle + " " + newReportDescription + " url");
        }

      },

      [newReportTitle, newReportDescription, newReportUrl]
      );

    // UseEffect is called to apply a side effect whenever a re-render is made. If we add a dependency inside second 
    // parameter array then it only calls side effect when this dependency is changed. SO basically what I do here
    // is call UseEffect after Url of the item is changed AFTER clicking Upload button. I wasn't be able to do this 
    // with .then() methods
    useEffect(() => {

      // When initial page loads don't show the error messages
      if (isInitialPageLoad) {
        setIsInitialPageLoad(false);

      } else {
        if (!newReportTitle) {
          setIsTitleError(true);
          setNewTitleHelperText("Title Error");
        } else {
          setIsTitleError(false);
          setNewTitleHelperText("");
        }
  
        if (!newReportDescription) {
          setIsDescriptionError(true);
          setNewDescriptionHelperText("Description Error");
        } else {
          setIsDescriptionError(false);
          setNewDescriptionHelperText("");
        }
  
        if (!newReportUrl) {
          setIsUrlError(true);
          console.log("Url is missing");
        } 
      }

      // We check if there is any value inside Url string. IF we don't do this UseEffect calls anytime the page
      // reloads and adds an empty item into the database.
      if (newReportTitle && newReportDescription && newReportUrl) {

        console.log("positive code block executes");

        // The code where we create/add item into database
        onCreateNewReport(newReportTitle, newReportDescription, newReportUrl);

        // After uploading the report to the database make title and description fields empty both in UI and
        //data model. And stop error messages from showing up since TExtFields will be empty.
        reportDescriptionTextfieldRef.current.value = "";
        reportTitleTextfieldRef.current.value = "";

        setNewReportTitle("");
        setNewReportDescription("");
        //setNewReportUrl("");

        setIsDescriptionError(false);
        setIsUrlError(false);
        setIsTitleError(false);
        
      } else {
        console.log("negative code block executes");
      }

    }, [newReportTitle, newReportDescription, newReportUrl]); // Only re-run the effect if newReportUrl changes


    // Card button onClick event handler
    const onReadReport = ((reportUrl) => {
      //event.preventDefault();
  
      const url = reportUrl;
      window.open(url, '_blank');
  
      console.log("Button clicked");
    });


    // radio button click handling with options file upload or url link
    const handleRadioChange = (event) => {
      setRadioValue(event.target.value);
    };

    // Set the display property of the Url TExtField and File Upload with adding/removing necessary CSS classes
     useEffect(() => {
      if (radioValue == "file") {
        fileDivRef.current.classList.add("visible_div");
        fileDivRef.current.classList.remove("hidden_div");
        urlDivRef.current.classList.add("hidden_div");
        urlDivRef.current.classList.remove("visible_div");

      } else if (radioValue == "url") {
        urlDivRef.current.classList.add("visible_div");
        urlDivRef.current.classList.remove("hidden_div");
        fileDivRef.current.classList.add("hidden_div");
        fileDivRef.current.classList.remove("visible_div");
      }
    
    }, [radioValue]); 



  
    return (
      <div>
          <form className={classes.root} noValidate autoComplete="off">

            <div className="container">
              <TextField
                  id="report_title_textfield"
                  label="Rapor Başlığı"
                  size="small"
                  variant="outlined"
                  fullWidth
                  autoFocus
                  placeholder="Başlık yazın"
                  error = {isTitleError}
                  helperText= {newTitleHelperText}
                  inputRef={reportTitleTextfieldRef} />
            </div>

            <div className="container">
              <TextField
                  id="report_description_textfield"
                  label="Açıklama"
                  size="small"
                  variant="outlined"
                  fullWidth
                  placeholder="Açıklama yazın"
                  error = {isDescriptionError}
                  helperText= {newDescriptionHelperText}
                  inputRef={reportDescriptionTextfieldRef} />
            </div>

            <div>
              <FormControl component="fieldset">
                <FormLabel component="legend">Yükleme Türü:</FormLabel>
                <RadioGroup row aria-label="upload_type" name="upload1" value={radioValue} onChange={handleRadioChange}>
                  <FormControlLabel value="file" control={<Radio />} label="Dosya" />
                  <FormControlLabel value="url" control={<Radio />} label="URL Link" />
                </RadioGroup>
              </FormControl>
            </div>

            <div className ="hidden_div container" ref={urlDivRef}>
              <TextField
                  label="Url Linki"
                  size="small"
                  variant="outlined"
                  fullWidth
                  placeholder="Url Linki yazın"
                  inputRef={reportUrlTextfieldRef} />
            </div>

            <div className ="visible_div" ref={fileDivRef}>
              <input
                id="contained-button-file"
                className={uploadClasses.input}
                type="file"
                onChange={onNewReportUrlChange}
                ref={fileUpload} />
              <label htmlFor="contained-button-file">
                <Button variant="outlined" color="primary" component="span" size="small" startIcon={<CloudUploadIcon />}>
                  Dosya Seç
                </Button>
              </label>
            </div>

            <div>
              <FormHelperText error={isUrlError} >
                {UrlHelperText}
              </FormHelperText>
            </div>

            <div className="container">
                <Button onClick={onAddReport} type="submit" variant="contained" color="primary" >
                  Yükle
                </Button>
            </div>

          </form>
        <div/>

        <section>
          <p>Reports:</p>
          <ul>
            {reports.map((report) => (
                <div>
                    <div >
                        <Card className={cardClasses.root}>
                            <div onClick={() => onReadReport(report[1].url)}>
                              <CardActionArea>
                                <CardContent className={cardContentClasses.cardcontent}>
                                    <Typography className={cardClasses.title} variant="h6" component="h2">
                                        {report[1].title}
                                    </Typography>
                                    <Typography className={cardClasses.description} color="textSecondary" gutterBottom>
                                        {report[1].description}
                                    </Typography>
                                  </CardContent>
                                </CardActionArea>
                            </div>
                            <div className="card_div2">
                                <Typography className={cardClasses.description} color="textSecondary" gutterBottom>
                                    Url: {report[1].url}
                                </Typography>
                            </div>
                        </Card>
                  </div>
                </div>
            ))}
          </ul>
        </section>
      </div>
    );
  };
