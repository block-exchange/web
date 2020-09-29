import React ,  { useState, useEffect } from 'react';


import axios from 'axios';

import AppReviewCard from './CardComponent.js'

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';




const ORG_QUERY = "https://api.github.com/orgs/Block-exchange/repos?ACCEPT=application/vnd.github.v3+json" 
const HEADER = "ACCEPT=application/vnd.github.v3+json"


const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 100,
    marginRight : 100,
    marginTop:50,
  },

}));



function RepoList () {
    const classes = useStyles();
    const [repos, setData] = useState([]);


    useEffect(() => {
        fetchData();
      });

    
    const fetchData = async () => {
      const res = await axios.get(
        ORG_QUERY,
      );
      setData(res.data);
    };


    return (
        <Grid container spacing={4} className={classes.root}>
  
          {
           repos.map(
                      repo => <Grid item>
                      <AppReviewCard title={repo.name} desc={repo.description}/>
                      </Grid>)
          }
        }
          
        </Grid>
    )
}


export default RepoList