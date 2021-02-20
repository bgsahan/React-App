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

export default ({ reports: reports = [], onCreateNewReport: onCreateNewReport }) => {

    const classes = useStyles();
    const cardClasses = useCardStyles();
    const cardContentClasses = useCardContentStyles();

    const fileUpload = useRef(); // We bind this reference with Input for file upload via ref attribute
    const reportTitleTextfieldRef = useRef(null);
    const reportDescriptionTextfieldRef = useRef(null);

    var fileUrl;  //variable to receive full url of the file uploaded in Firebase Storage

    // UseStates. Whenever setter method is called screen re-renders with updated values
    const [newReportTitle, setNewReportTitle] = useState("");
    const [newReportDescription, setNewReportDescription] = useState("");
    const [newReportUrl, setNewReportUrl] = useState("");

    const onNewReportUrlChange = useCallback((event) => {
        //Implement this if you need manual Url typing       
    }, []);  


    // Upload button callback. Here I upload the file into Firebase Storage. But don't create/add item into Firebase Real
    // Time Database. I do that inside UseEffect only AFTER the file is uploaded and the url is received.
    const onAddReport = useCallback(
      (event) => {
        event.preventDefault();

        const file = fileUpload.current.files[0]
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

      

      setNewReportTitle(reportTitleTextfieldRef.current.value);
      setNewReportDescription(reportDescriptionTextfieldRef.current.value);
      console.log(newReportTitle + " " + newReportDescription);
      },

      [newReportTitle, newReportDescription, newReportUrl]
    );

    // UseEffect is called to apply a side effect whenever a re-render is made. If we add a dependency inside second 
    // parameter array then it only calls side effect when this dependency is changed. SO basically what I do here
    // is call UseEffect after Url of the item is changed AFTER clicking Upload button. I wasn't be able to do this 
    // with .then() methods
    useEffect(() => {

        // We check if there is any value inside Url string. IF we don't do this UseEffect calls anytime the page
        // reloads and adds an empty item into the database.
        if (newReportUrl) {
          // The code where we create/add item into database
          onCreateNewReport(newReportTitle, newReportDescription, newReportUrl);
        }

        setNewReportTitle("");
        setNewReportDescription("");
        //setNewReportUrl("");
    }, [newReportUrl]); // Only re-run the effect if newReportUrl changes


    // Card button onClick event handler
    const onReadReport = ((reportUrl) => {
      //event.preventDefault();
  
      const url = reportUrl;
      window.open(url, '_blank');
  
      console.log("Button clicked");
    });
  
    return (
      <div>
          <form className={classes.root} noValidate autoComplete="off">

            <div>
              <TextField
                          id="report_title_textfield"
                          label="Rapor Başlığı"
                          size="small"
                          variant="outlined"
                          inputRef={reportTitleTextfieldRef} />
            </div>

            <div>
              <TextField
                          id="report_description_textfield"
                          label="Açıklama"
                          size="small"
                          variant="outlined"
                          inputRef={reportDescriptionTextfieldRef} />
            </div>

{/*   Code for manually entering Url

          <div className="container">
                <input
                  type="text"
                  placeholder="Url..."
                  value={newReportUrl}
                  onChange={onNewReportUrlChange} />
            </div>
 */}

            <div>
                <input type="file" onChange={onNewReportUrlChange} ref={fileUpload}/>
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
