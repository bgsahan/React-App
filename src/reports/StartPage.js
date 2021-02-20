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

          <div>
            <div className="container">
                Rapor İzleme Sistemi
            </div>

            <div className="container">
                  <Link to="/search" className="button-link">
                    <Button variant="contained" color="primary" >
                        RAPOR LİSTESİ
                    </Button>
                  </Link>
            </div>


            <div className="container">
                  <Link to="/add-report" className="button-link">
                    <Button variant="contained" color="primary" >
                        RAPOR YÜKLEME
                    </Button>
                  </Link>
            </div>
        </div> 
        
      </main>
    );
  };
  
  export default StartPage;