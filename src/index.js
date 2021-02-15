import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GreenpassHomepage from './greenpass/GreenpassHomepage';
import SupportHomepage from './c-support/support/SupportHomepage';
import ReportHomepage from './reports/ReportHomepage';
import ReportHomepage2 from './reports/ReportHomepage2';
import ReportSearchPage from './reports/ReportSearchPage';


class MyApp extends React.Component {

  render() {
    return (
      <div>
        {/* To change the app comment out the unwanted ap   */}
        {/* <GreenpassHomepage /> */}
        <ReportSearchPage />
      </div>
    );
  }

}

const e = React.createElement;
const domContainer = document.querySelector('#root');
ReactDOM.render(e(MyApp), domContainer);