import React, { useCallback, useState, useEffect, useReducer } from "react";
import {app} from './base.js'
import { useRef } from "react";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import ReportList from "./ReportList";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const CustomTextField = withStyles({
  root: {
    '& label': {
      color: '#909aa2',
    },

    '& label.Mui-focused': {
      color: '#3F51B5',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#3F51B5',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#909aa2',
        border: '2px solid',
      },
      '&:hover fieldset': {
        borderColor: '#3F51B5',
        border: '3px solid',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#3F51B5',
        border: '3px solid',
      },
    },
  },
})(TextField);

export default ({ reports: reports = [], onCreateNewReport: onCreateNewReport, removeItemWithKey: removeItemWithKey }) => {

    const classes = useStyles();

    const reportTitleTextfieldRef = useRef(null);
    const reportDescriptionTextfieldRef = useRef(null);
    const reportUrlTextfieldRef = useRef(null);

    // UseStates. Whenever setter method is called screen re-renders with updated values
    const [newReportTitle, setNewReportTitle] = useState("");
    const [newReportDescription, setNewReportDescription] = useState("");
    const [newReportUrl, setNewReportUrl] = useState("");
    const [isTitleError, setIsTitleError] = useState(false);
    const [isDescriptionError, setIsDescriptionError] = useState(false);
    const [isUrlError, setIsUrlError] = useState(false);
    const [titleHelperText, setTitleHelperText] = useState("");
    const [descriptionHelperText, setDescriptionHelperText] = useState("");
    const [urlHelperText, setUrlHelperText] = useState("Henüz dosya seçilmedi");

    const [isInitialLoad, setisInitialLoad] = useState(true);

    const urlDivRef = useRef(null);

    const onAddReport = (event) => {
        event.preventDefault();
        
        setNewReportTitle(reportTitleTextfieldRef.current.value);
        setNewReportDescription(reportDescriptionTextfieldRef.current.value);
        setNewReportUrl(reportUrlTextfieldRef.current.value);

        //console.log("Radio Value: " + radioValue + " - " + titleString + " - " + descriptionString + " - " + urlString);
      }

    // UseEffect is called to apply a side effect whenever a re-render is made. If we add a dependency inside second 
    // parameter array then it only calls side effect when this dependency is changed. SO basically what I do here
    // is call UseEffect after Url of the item is changed AFTER clicking Upload button. I wasn't be able to do this 
    // with .then() methods
    useEffect(() => {
      
      // If there is text in TextField then stop error message
      // Optimisation may be needed here with checking if Text fields are not empty before statement etc.
      setIsTitleError(false);
      setIsDescriptionError(false);
      setIsUrlError(false);
      setTitleHelperText("");
      setDescriptionHelperText("");
      setUrlHelperText("");

      // We check if there is any value inside Url string. IF we don't do this UseEffect calls anytime the page
      // reloads and adds an empty item into the database.
      if (newReportTitle && newReportDescription && newReportUrl) {

        console.log("positive code block executes:" + newReportTitle + " " + newReportDescription + " " + newReportUrl);

        // The code where we create/add item into database
        onCreateNewReport(newReportTitle, newReportDescription, newReportUrl);

        // After uploading the report to the database make title and description fields empty both in UI and
        //data model. And stop error messages from showing up since TExtFields will be empty.
        reportDescriptionTextfieldRef.current.value = "";
        reportTitleTextfieldRef.current.value = "";
        reportUrlTextfieldRef.current.value = "";
        //TODO: Change "Dosya seçildi" text to "Dosya seçiniz" so user will notice he should choose a file.

      } else {
        console.log("negative code block executes " + newReportTitle + " - " + newReportDescription + " - " + newReportUrl);

        // Check if it is first time page loads. If yes then don't show error when Text Field is empty. 
        // Downside of this approch is you have to re-render component with setInitialLoad(). To fix this
        // there is a way to do it with useRref(). But it doesn't cost much performance for now.
        if(isInitialLoad) {
          setisInitialLoad(false);
          console.log("initial load");
          
        } else {
          if (!newReportTitle) {
            setIsTitleError(true);
            setTitleHelperText("Bir başlık yazın");
          }

          if (!newReportDescription) {
            setIsDescriptionError(true);
            setDescriptionHelperText("Bir açıklama yazın");
          }

          if (!newReportUrl) {
            setIsUrlError(true);
            setUrlHelperText("Url Linki ekleyin");
          }
        }

      }

    }, [newReportTitle, newReportDescription, newReportUrl]); // Only re-run the effect if newReportUrl changes


    return (
      <div>
          <form noValidate autoComplete="off">

            <div className="container">
              <CustomTextField
                  id="report_title_textfield"
                  label="Rapor Başlığı"
                  size="small"
                  variant="outlined"
                  fullWidth
                  autoFocus
                  error={isTitleError}
                  helperText= {titleHelperText}
                  inputRef={reportTitleTextfieldRef} />
            </div>

            <div className="container">
              <CustomTextField
                  id="report_description_textfield"
                  label="Açıklama"
                  size="small"
                  variant="outlined"
                  fullWidth
                  error={isDescriptionError}
                  helperText= {descriptionHelperText}
                  inputRef={reportDescriptionTextfieldRef} />
            </div>

            <div className="container" ref={urlDivRef}>
              <CustomTextField
                  label="Url Linki"
                  size="small"
                  variant="outlined"
                  fullWidth
                  error={isUrlError}
                  helperText= {urlHelperText}
                  inputRef={reportUrlTextfieldRef} />
            </div>

{/* 
            <div>
              <FormHelperText error={isUrlError} >
                {UrlHelperText}
              </FormHelperText>
            </div>
 */}

            <div className="container">
                <Button onClick={onAddReport} type="submit" variant="contained" color="primary" >
                  Yükle
                </Button>
            </div>

          </form>
        <div/>

        <ReportList reports={reports} removeItemWithKey={removeItemWithKey} />

      </div>
    );
  };
