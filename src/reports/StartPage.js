import React, { useEffect, useState, useCallback } from "react";
import './themeStyle.css';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

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

          <div>
            <div className="container">
                Rapor İzleme Sistemi
            </div>

            <div className="container">
                  <Link to="/search">
                    <Button variant="contained" color="primary" >
                        RAPOR LİSTESİ
                    </Button>
                  </Link>
            </div>


            <div className="container">
                  <Link to="/add-report">
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