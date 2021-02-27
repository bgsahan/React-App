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
  
  export default function TopCard({imageUrl}) {
    const classes = useStyles();
  
    return (
      <Card className={classes.root} elevation={8}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={imageUrl}
            title="Contemplative"
          />
        </CardActionArea>
      </Card>
    );
  }