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
      setReports(reportsArray);
      console.log(reportsArray);

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
        <div>Report Search Page</div>

        <div className="top_card_div" onClick={() => goToLink("https://firebasestorage.googleapis.com/v0/b/reports-a586c.appspot.com/o/skyscraper-3184798_1280.jpg?alt=media&token=569b8828-ff37-4c24-a7bd-7e92a3ebc0cc")}>
          
          <TopCard 
            imageUrl="https://firebasestorage.googleapis.com/v0/b/reports-a586c.appspot.com/o/rapor_cover1.jpg?alt=media&token=644e8a0f-597a-422e-960f-fc82f5d5dc0c" />
        </div>

        <div className="top_card_div" onClick={() => goToLink("https://firebasestorage.googleapis.com/v0/b/reports-a586c.appspot.com/o/skyscraper-3184798_1280.jpg?alt=media&token=569b8828-ff37-4c24-a7bd-7e92a3ebc0cc")}>
          <TopCard 
            imageUrl="https://firebasestorage.googleapis.com/v0/b/reports-a586c.appspot.com/o/rapor_cover1.jpg?alt=media&token=644e8a0f-597a-422e-960f-fc82f5d5dc0c" />
        </div>

        <div className="top_card_div" onClick={() => goToLink("https://firebasestorage.googleapis.com/v0/b/reports-a586c.appspot.com/o/skyscraper-3184798_1280.jpg?alt=media&token=569b8828-ff37-4c24-a7bd-7e92a3ebc0cc")}>
          <TopCard 
            imageUrl="https://firebasestorage.googleapis.com/v0/b/reports-a586c.appspot.com/o/rapor_cover1.jpg?alt=media&token=644e8a0f-597a-422e-960f-fc82f5d5dc0c"/>
        </div>

        <SearchManager reports={reports} onCreateNewReport={onCreateNewReport} />
        <div className="error_div">{errorMessage}</div>
    </main>
  );
};

export default ReportSearchPage;