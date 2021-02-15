import React from 'react';
import ReactDOM from 'react-dom';
import '../themeStyle.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: "Bulut",
            companyTaxNumber: 0
        };
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    submitHandler = (event) => {
        event.preventDefault();
        //alert("Company Name: " + this.state.companyName + " - Company Tax Number: " + this.state.companyTaxNumber.toString());
        this.exportHTML();
    }

    /**
     * Custom method for creating Word document with HTML tags
     */
    exportHTML() {
        var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
            "xmlns:w='urn:schemas-microsoft-com:office:word' " +
            "xmlns='http://www.w3.org/TR/REC-html40'>" +
            "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";

        // Change body variable with necessary HTML tags accordingly. 
        // You can use variables inside ${} with backticks wrapping whole string
        var body = `<h1>Header</h1> <h2>${this.state.companyName}<p>${this.state.companyTaxNumber}</p>`    
        
        var footer = "</body></html>";
        
        var sourceHTML = header + body + footer;

        var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        var fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = 'document.doc'; // Change file name here
        fileDownload.click();
        document.body.removeChild(fileDownload);
    }


    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="textFields">
                    <TextField
                        label="Tam Firma Unvanı"
                        name="companyName"
                        onChange={this.myChangeHandler}
                        variant="outlined"
                        placeholder="Örnek: ABC Ltd. Şti." />
                </div>

                <div className="textFields">
                    <TextField
                        label="Firma Vergi No"
                        name="companyTaxNumber"
                        onChange={this.myChangeHandler}
                        variant="outlined"
                        placeholder="Örnek: 1234567890" />
                </div>

                <div class="submitButton">
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary">
                        WORD OLARAK KAYDET
                    </Button>
                </div>
            </form>
        );

    }
}

export default UserForm;