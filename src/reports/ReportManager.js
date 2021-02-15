import React, { useCallback, useState, useEffect } from "react";
import {app} from './base.js'
import { useRef } from "react";

export default ({ reports: reports = [], onCreateNewReport: onCreateNewReport }) => {
    const fileUpload = useRef(); // We bind this reference with Input for file upload via ref attribute

    var fileUrl;  //variable to receive full url of the file uploaded in Firebase Storage

    // UseStates. Whenever setter method is called screen re-renders with updated values
    const [newReportTitle, setNewReportTitle] = useState("");
    const [newReportDescription, setNewReportDescription] = useState("");
    const [newReportUrl, setNewReportUrl] = useState("");
  
    // USeCallBacks. Used to track changes in Input fields via onChange attribute 
    const onNewReportTitleChange = useCallback((event) => {
      setNewReportTitle(event.target.value);
    }, []);

    const onNewReportDescriptionChange = useCallback((event) => {
        setNewReportDescription(event.target.value);
      }, []);

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

      },
      [newReportTitle, newReportDescription, newReportUrl]
    );

    // UseEffect is called to apply a side effect whenever a re-render is made. If we add a dependency inside second 
    // parameter array then it only calls side effect when this dependency is changed. SO basically what I do here
    // is call UseEffect after Url of the item is changed AFTER clicking Upload button. I wasn't be able to do this 
    // with .then() methods
    useEffect(() => {
        // The code where we create/add item into database
        onCreateNewReport(newReportTitle, newReportDescription, newReportUrl);

        setNewReportTitle("");
        setNewReportDescription("");
        //setNewReportUrl("");
    }, [newReportUrl]); // Only re-run the effect if newReportUrl changes
  
    return (
      <div>
          <form>

            <div className="container">
                <input
                  type="text"
                  placeholder="Report title..."
                  value={newReportTitle}
                  onChange={onNewReportTitleChange} />
            </div>

            <div className="container">
                <input
                  type="text"
                  placeholder="Description..."
                  value={newReportDescription}
                  onChange={onNewReportDescriptionChange} />
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
                <button type="submit" onClick={onAddReport}>
                  Upload
                </button>
            </div>

          </form>
        <div/>

        <section>
          <p>Reports:</p>
          <ul>
            {reports.map((report) => (
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
