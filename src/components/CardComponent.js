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

import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";



import AppDetail from './AppDetail.js'


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
  const classes = useStyles();

  return (
        <div>
		<Card className={classes.root}>
		  <CardHeader
			action={
			  <IconButton aria-label="settings">
				<MoreVertIcon />
			  </IconButton>
			}
			title={props.title}
		  />
		  <Link to={props.title}>
		  <CardMedia
			className={classes.media}
			image= {process.env.PUBLIC_URL + '/images/' + props.title + ".png"}			
			title= {props.title}
		  />
		  </Link>
		  <CardContent>
			<Typography variant="body2" color="textSecondary" component="p">
			{props.desc}
			</Typography>
		  </CardContent>
		</Card>
		</div>
  );
}




export default AppReviewCard



