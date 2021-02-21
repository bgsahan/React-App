import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  
  export default function TopCard() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://firebasestorage.googleapis.com/v0/b/reports-a586c.appspot.com/o/rapor_cover1.jpg?alt=media&token=644e8a0f-597a-422e-960f-fc82f5d5dc0c"
            title="Contemplative"
          />
        </CardActionArea>
      </Card>
    );
  }