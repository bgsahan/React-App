import React, { useCallback, useState, useEffect } from "react";
import {app} from './base.js'
import { useRef } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
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
      elevation: 20,
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
    card_content: {
      margin: 0,
      padding: 0,
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

    const reportTitleTextfieldRef = useRef(null);

    // UseStates. Whenever setter method is called screen re-renders with updated values
    const [newReportTitle, setNewReportTitle] = useState("");
    const [newReportDescription, setNewReportDescription] = useState("");
    const [newReportUrl, setNewReportUrl] = useState("");
    const [isError, setIsError] = useState(false);
    const [isInitialPageLoad, setIsInitialPageLoad] = useState(true);
    const [newHelperText, setNewHelperText] = useState("");

    // TODO: This initial value can't be assigned because of asynchorounous nature of javascript. It takes longer 
    // time to fetch reports long after this statement is called. And at the time this statement is called initial
    // value is null. Try to find a different solution. Maybe with UseEffect?
    const [queriedReportList, setQueriedReportList] = useState(reports); 

    // Search button callback.. IF nothing is written inside Search input field then it brings all items and 
    // it doesn't assign reports list to queryReportList. I removed USeCallback because it was respnding only to changes
    // but at start we don't have any changes so it wouldn't call the methods.
    const onSearchReport = ((event) => {
        event.preventDefault();

        setNewReportTitle(reportTitleTextfieldRef.current.value);

        // When button clicks check if TextField is empty and show error message. I actually handle this in useEffect
        // but had to do this here as well because at first start if no text is written inside TextField then
        // useEffect doesn't call as TextField vlaue is not changed.
        if (newReportTitle) {
          setIsError(false);
          setNewHelperText("");
        
        } else {
          setIsError(true);
          setNewHelperText("Arama kısmı boş."); 
        }

      });


      // Card button onClick event handler
      const onReadReport = ((reportUrl) => {

        //event.preventDefault();

        const url = reportUrl;
        window.open(url, '_blank');
      });

    useEffect(() => {

          // The code where we create/add item into database
          setQueriedReportList(reports);
    }, [reports]); // Only re-run the effect if newReportUrl changes

    useEffect(() => {

        // check if there is any text inside search field before applying search
        if (newReportTitle) {

          // hide error mesage if there is text inside TextField
          setIsError(false);
          setNewHelperText("");

          // I added useState for queriedReportList because whenever a new list is queried we need to update the table
          setQueriedReportList(reports.filter(([key, value]) => value.title.includes(newReportTitle)));

        // if there is no text in search field then fetch all the items
        } else {
            setQueriedReportList(reports);

            // When initial page loads don't show the error message
            if (isInitialPageLoad) {
              setIsInitialPageLoad(false);
            } else {
              setIsError(true);
              setNewHelperText("Arama kısmı boş."); 
            }
        }

    }, [newReportTitle]); 

    return (
        <div>
            <form>

                <div className="container">
                    <TextField
                        error = {isError}
                        id="outlined-read-only-input"
                        label="Arama"
                        placeholder="Başlıkta geçen bir kelime yazın"
                        helperText= {newHelperText}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        size="small"
                        autoFocus
                        fullWidth
                        inputRef={reportTitleTextfieldRef} />
                </div>

                <div className={classes.root}>
                    <Button onClick={onSearchReport} type="submit" variant="contained" color="primary" >
                        Ara
                    </Button>
                </div>

            </form>


            <section>
            <p>Reports:</p>
            <ul>
                    {queriedReportList.map((report) => (
                        <div className="card_div" onClick={() => onReadReport(report[1].url)}>
                            <Card className={cardClasses.root} >
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
                            </Card>
                        </div>
                    ))}
            </ul>
            </section>
        </div>
    );
  };
