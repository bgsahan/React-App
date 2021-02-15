import React from 'react';
import ReactDOM from 'react-dom';
import '../themeStyle.css';

class FormHeader extends React.Component {
    constructor(props) {
      super(props);

    }
  
    render() {

      return (
        <div className="mainHeader">
          <h2>Yeşil Pasaport Başvuru Formu 4</h2>
        </div>
      );
      
    }
  }
  
  export default FormHeader;