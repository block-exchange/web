import React ,  { useState, useEffect } from 'react';
import axios from 'axios';
import base64 from 'react-native-base64'


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





function AppDetail({match}){
	console.log(match)
	
	const ORG_QUERY = "https://api.github.com/repos/block-exchange/" + match.params.name + "/contents/web/index.html" 
	
	const classes = useStyles();
	
	
	const [repos, setData] = useState([]);


    useEffect(() => {
        fetchData();
      }, []);

    
    const fetchData = async () => {
      const res = await axios.get(
        ORG_QUERY,
      );
      setData(res.data);
    };
	
	console.log(repos)
	
	
	return (
	
	<div> <div>{match.params.name}</div> <img src= {process.env.PUBLIC_URL + '/images/' + match.params.name + ".png"}/></div>
	
	);

}

export default AppDetail;