import React, { useEffect, useState, useCallback } from "react";
import './themeStyle.css';
import axios from "axios";
import SearchManager from "./SearchManager";
import TopCard from "./TopCard";

const myServerBaseURL = "https://reports-a586c-default-rtdb.firebaseio.com/";

const ReportSearchPage = () => {
  //This state will be populated with the Axios HTTP response
  const [reports, setReports] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);
  

  const loadReports = useCallback(() => {
    axios.get(`${myServerBaseURL}/reports.json`).then(response => {
      const reportsArray = Object.entries(response.data);  

      // I reversed order of array to show the last added item at the start. But this is a hack&slash. I need to
      // find a solution to order items according to the date or soemthing. This may be a TODO.
      const reverseReportsArray = reportsArray.reverse();
      setReports(reverseReportsArray);
      //console.log(reportsArray);
      console.log(reverseReportsArray);

      //const newSearch = reportsArray.filter(([key, value]) => value.url == "www.google.com");
      //console.log(newSearch);
    }).catch(error => {
      console.log(error);

      if (error.message = "Network Error") {
        setErrorMessage("Hata Mesajı: " + error.message + " (İnternet bağlantınızı kontrol edin)");
      } else {
        setErrorMessage("Hata Mesajı: " + error.message);
      }
      
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

  // Card button onClick event handler
  const goToLink = ((url) => {

    //event.preventDefault();
  
    window.open(url, '_blank');
  });

  return (
    <main>
        <div className="top_card_layout_div">

          <div className="top_card_div" onClick={() => goToLink("https://www.google.com")}>
            <TopCard
              imageUrl="https://firebasestorage.googleapis.com/v0/b/reports-a586c.appspot.com/o/02.jpg?alt=media&token=8a0df9bb-d912-4216-ad38-0d0aa6538595" />
          </div>

          <div className="top_card_div" onClick={() => goToLink("https://www.google.com")}>
            <TopCard
              imageUrl="https://firebasestorage.googleapis.com/v0/b/reports-a586c.appspot.com/o/03.jpg?alt=media&token=94af93b3-b8be-4644-9528-3c3a91b23512" />
          </div>

          <div className="top_card_div" onClick={() => goToLink("https://www.google.com")}>
            <TopCard
              imageUrl="https://firebasestorage.googleapis.com/v0/b/reports-a586c.appspot.com/o/01.jpg?alt=media&token=c8c55370-f687-4dec-90e3-f6850d6ac137"/>
          </div>
   
        </div>

        <SearchManager reports={reports} onCreateNewReport={onCreateNewReport} />
        <div className="error_div">{errorMessage}</div>
    </main>
  );
};

export default ReportSearchPage;