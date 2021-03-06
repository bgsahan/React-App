import React, { useCallback, useState, useEffect } from "react";
import {app} from './base.js'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  
  const useCardStyles = makeStyles({
    root: {
      minWidth: 275,
      marginBottom: 10,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      color: "black",
      fontSize: 14,
      fontWeight: "bold",
    },
    description: {
      fontSize: 12,
      fontWeight: "normal",
    },
    pos: {
      marginBottom: 12,
    },
  });  
  
  const useCardContentStyles = makeStyles({
    cardcontent: {
      paddingTop: 5,
      paddingBottom: 0,
      paddingLeft: 15,
      paddingRight: 15,
      "&:last-child": {
        paddingBottom: 0
      }
    }
  });

const ReportList = React.memo( ({ reports: reports = []}) => {

    const classes = useStyles();
    const cardClasses = useCardStyles();
    const cardContentClasses = useCardContentStyles();


    return (
        <div> 
          <section>
            <p>Reports:</p>
            <ul>
              {reports.map((report) => (
                  <div>
                      <div >
                          <Card className={cardClasses.root}>
                              <div onClick={() => {
                                        const url = report[1].url;
                                        window.open(url, '_blank');
                                        console.log("Button clicked");
                                }}>
                                <CardActionArea>
                                  <CardContent className={cardContentClasses.cardcontent}>
                                      <Typography className={cardClasses.title} variant="h6" component="h2">
                                          {report[1].title}
                                      </Typography>
                                      <Typography className={cardClasses.description} color="textSecondary" gutterBottom>
                                          {report[1].description}
                                      </Typography>
                                    </CardContent>
                                  </CardActionArea>
                              </div>
                              <div className="card_div2">
                                  <Typography className={cardClasses.description} color="textSecondary" gutterBottom>
                                      Url: {report[1].url}
                                  </Typography>
                              </div>
                          </Card>
                    </div>
                  </div>
              ))}
            </ul>
          </section>
        </div>
      );
}
);

export default ReportList;