import React from 'react';
import ReactDOM from 'react-dom';
import './themeStyle.css';
import UserForm from './components/UserForm.js';
import FormHeader from './components/FormHeader.js';


class GreenpassHomepage extends React.Component {

  render() {
    return (
      <div>
        <FormHeader />
        <UserForm />

      </div>
    );
  }

}

export default GreenpassHomepage;