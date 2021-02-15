import React, { useCallback, useState, useEffect } from "react";
import {app} from './base.js'
import { useRef } from "react";

export default ({ reports: reports = [], onCreateNewReport: onCreateNewReport }) => {

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

    // Search button callback.. IF nothing is written inside Search input field then UseCallback doesn't call and 
    // it doesn't assign reports list to queryReportList. There needs to be a change in Serch input to useCallack call.
    const onAddReport = useCallback(
      (event) => {
        event.preventDefault();

        // I added useState for queriedReportList because whenever a new list is queried we need to update the table
        setQueriedReportList(reports.filter(([key, value]) => value.title == newReportTitle));
        console.log(queriedReportList);
        console.log(newReportTitle);

      },
      [newReportTitle, newReportDescription, newReportUrl]
    );

    return (
        <div>
            <form>

                <div className="container">
                    <input
                    type="text"
                    placeholder="Search title.."
                    value={newReportTitle}
                    onChange={onNewReportTitleChange} />
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
