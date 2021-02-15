import React, { useEffect, useState, useCallback } from "react";
import './themeStyle.css';
import axios from "axios";
import SearchManager from "./SearchManager";

const myServerBaseURL = "https://reports-a586c-default-rtdb.firebaseio.com/";

const ReportSearchPage = () => {
  //This state will be populated with the Axios HTTP response
  const [reports, setReports] = useState([]);

  const loadReports = useCallback(() => {
    axios.get(`${myServerBaseURL}/reports.json`).then(response => {
      const reportsArray = Object.entries(response.data);  
      setReports(reportsArray);
      console.log(reportsArray);

      //const newSearch = reportsArray.filter(([key, value]) => value.url == "www.google.com");
      //console.log(newSearch);
    });
  }, []);

  //The reports are loaded initially..
  useEffect(() => {
    loadReports();
  }, [loadReports]);

  const onCreateNewReport = useCallback(
    (newReportTitle, newReportDescription, newReportUrl) => {
      axios.post(`${myServerBaseURL}/reports.json`, {
          title: newReportTitle,
          description: newReportDescription,
          url: newReportUrl,
        })
        .then((result) => {
          //Reload the reports to show also the new one
          loadReports();
        })
        .catch((error) => {
          /**
           * If the response status code is 409 - Conflict, then we already have
           * a report with this name.
           **/
          if (error.response.status === 409) {
            alert("Report with same title exists!");
          } else {
            alert("Unknown error.");
          }
        });
    },
    [loadReports]
  );

  return (
    <main>
        <div>Report Search Page</div>
        <SearchManager reports={reports} onCreateNewReport={onCreateNewReport} />
    </main>
  );
};

export default ReportSearchPage;