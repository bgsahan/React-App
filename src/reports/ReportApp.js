import React, { useEffect, useState, useCallback } from "react";
import './themeStyle.css';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ReportSearchPage from './ReportSearchPage.js';
import ReportHomepage2 from './ReportHomepage2.js';
import StartPage from './StartPage.js';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));  

const ReportApp = () => {
  
    return (
        <Router>

          <Switch>
            <Route path="/" exact component={StartPage}/>
            <Route path="/search" component={ReportSearchPage}/>
            <Route path="/add-report" component={ReportHomepage2} />
          </Switch>

        </Router>
    );
  };
  
  export default ReportApp;