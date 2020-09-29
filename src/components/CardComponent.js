import React ,  { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';

import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const url = 'https://api.github.com/graphql'
const token = "a4478bb771d7a43232f55169f65435a41953c7c2"

const options = {
  headers: {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : "",
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    maxHeight: 300,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));





function AppReviewCard(props) {
  const [image, setData] = useState([]);
  const classes = useStyles();
  const json = {'query' : '{repository (owner: "Block-Exchange", name: "'+ props.title +'") {openGraphImageUrl}}' }

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
        const res = await axios.post(url,json, options)
            .then((res) => {
              setData(res.data.data.repository.openGraphImageUrl);
            })
            .catch((err) => {
              console.log(err);
        })
    };
  

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {props.desc}
        </Typography>
      </CardContent>
    </Card>
  );
}


export default AppReviewCard