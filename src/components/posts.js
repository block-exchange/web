import React ,  { useState, useEffect } from 'react';


import axios from 'axios';

import AppReviewCard from './CardComponent.js'

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';


const ORG_QUERY = "https://api.github.com/orgs/Block-exchange/repos?per_page=200" 


const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: '80px',
    marginTop:50,
    marginBottom:50,
  },

}));



function Posts ({posts }) {
    const classes = useStyles();


    return (
        <Grid container spacing={3} className={classes.root}>
  
          {
           posts.map(
                      repo => <Grid item xs={12} sm={6} md={3}>
                      <AppReviewCard title={repo.name} desc={repo.description}/>
                      </Grid>)
          }
          
        </Grid>
    )
}


export default Posts
