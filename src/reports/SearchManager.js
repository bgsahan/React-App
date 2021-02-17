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
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});  

export default ({ reports: reports = [], onCreateNewReport: onCreateNewReport }) => {

    const classes = useStyles();
    const cardClasses = useCardStyles();

    // UseStates. Whenever setter method is called screen re-renders with updated values
    const [newReportTitle, setNewReportTitle] = useState("");
    const [newReportDescription, setNewReportDescription] = useState("");
    const [newReportUrl, setNewReportUrl] = useState("");

    // TODO: This initial value can't be assigned because of asynchorounous nature of javascript. It takes longer 
    // time to fetch reports long after this statement is called. And at the time this statement is called initial
    // value is null. Try to find a different solution. Maybe with UseEffect?
    const [queriedReportList, setQueriedReportList] = useState(reports); 
  
    // USeCallBacks. Used to track changes in Input fields via onChange attribute 
    const onNewReportTitleChange = useCallback((event) => {
      setNewReportTitle(event.target.value);
    }, []);

    // Search button callback.. IF nothing is written inside Search input field then it brings all items and 
    // it doesn't assign reports list to queryReportList. I removed USeCallback because it was respnding only to changes
    // but at start we don't have any changes so it wouldn't call the methods.
    const onAddReport = ((event) => {
        event.preventDefault();

        // check if there is any text inside search field before applying search
        if (newReportTitle) {
            // I added useState for queriedReportList because whenever a new list is queried we need to update the table
            setQueriedReportList(reports.filter(([key, value]) => value.title.includes(newReportTitle)));
            console.log(queriedReportList);
            console.log(newReportTitle);

        // if there is no text in search field then fetch all the items
        } else {
            setQueriedReportList(reports);
        }
      });


      // Card button onClick event handler
      const onReadReport = ((reportUrl) => {
        //event.preventDefault();

        const url = reportUrl;
        window.open(url, '_blank');

        console.log("Button clicked");
      });

    useEffect(() => {

          // The code where we create/add item into database
          setQueriedReportList(reports);
          console.log(queriedReportList);

    }, [reports]); // Only re-run the effect if newReportUrl changes

    return (
        <div>
            <form>

                <div className="container">
                    <TextField
                        id="outlined-read-only-input"
                        label="Arama"
                        helperText="Başlıkta geçen metni arayınız"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        value={newReportTitle}
                        onChange={onNewReportTitleChange}
                        variant="outlined" />
                </div>

                <div className={classes.root}>
                    <Button onClick={onAddReport} variant="contained" color="primary" >
                        Ara
                    </Button>
                </div>

            </form>


            <section>
            <p>Reports:</p>
            <ul>
                    {queriedReportList.map((report) => (
                        <div className="card_div">
                            <Card className={cardClasses.root}>
                                <CardContent>
                                    <Typography variant="h6" component="h2">
                                        {report[1].title}
                                    </Typography>
                                    <Typography className={cardClasses.title} color="textSecondary" gutterBottom>
                                        {report[1].description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => onReadReport(report[1].url)} size="small">Read</Button>
                                </CardActions>
                            </Card>
                        </div>
                    ))}
            </ul>
            </section>
        </div>
    );
  };
