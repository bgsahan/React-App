import React, { useCallback, useState, useEffect } from "react";
import {app} from './base.js'
import { useRef } from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default ({ reports: reports = [], onCreateNewReport: onCreateNewReport }) => {

    const classes = useStyles();

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
            setQueriedReportList(reports.filter(([key, value]) => value.title == newReportTitle));
            console.log(queriedReportList);
            console.log(newReportTitle);

        // if there is no text in search field then fetch all the items
        } else {
            setQueriedReportList(reports);
        }
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
                        value={newReportTitle}
                        onChange={onNewReportTitleChange}
                        variant="outlined" />
                </div>

                <div className="container">
                    <button type="submit" onClick={onAddReport}>
                        Search
                    </button>
                </div>

            </form>


            <section>
            <p>Reports:</p>
            <ul>
                    {queriedReportList.map((report) => (
                        <div>
                            <table key="table_key">
                                <thead></thead>
                                    <tbody>
                                        <tr key={report[1].title}>
                                            <td>{report[1].title}</td>
                                            <td>{report[1].description}</td>
                                            <td>{report[1].url}</td>
                                        </tr>
                                    </tbody>
                            </table>
                        </div>
                    ))}
            </ul>
            </section>
        </div>
    );
  };
