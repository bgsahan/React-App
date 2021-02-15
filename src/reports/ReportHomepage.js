import React from 'react';
import ReactDOM from 'react-dom';
import './themeStyle.css';
import {app} from './base.js'

function ReportHomepage () {

    const onChange = (evnt) => {
        const file = evnt.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name);
        fileRef.put(file).then(() => {
            console.log("Uploaded a file.")
        });

    }


    return (
        <div>
            <div>Report Homepage</div>
            <div>
                <input type="file" onChange={onChange}/>
            </div>
        </div>
    );


}

export default ReportHomepage;