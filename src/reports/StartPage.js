import React, { useEffect, useState, useCallback } from "react";
import './themeStyle.css';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));  

const StartPage = () => {

    const classes = useStyles();
  
    return (

      <main>

          <Helmet>
            <title>Raporlar</title>
          </Helmet>

          <div className="start_page_container_div">

            <div className="start_page_div">
                  <Link to="/search" className="button-link">
                    <Button variant="contained" color="primary" >
                        RAPOR LİSTESİ
                    </Button>
                  </Link>
            </div>


            <div className="start_page_div">
                  <Link to="/add-report" className="button-link">
                    <Button variant="contained" color="primary" >
                        KONTROL PANELİ
                    </Button>
                  </Link>
            </div>
        </div> 
        
      </main>
    );
  };
  
  export default StartPage;