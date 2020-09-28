import React ,  { useState, useEffect } from 'react';


import axios from 'axios';

import AppReviewCard from './CardComponent.js'

import Grid from '@material-ui/core/Grid';



const ORG_QUERY = "https://api.github.com/orgs/Block-exchange/repos?ACCEPT=application/vnd.github.v3+json" 
const HEADER = "ACCEPT=application/vnd.github.v3+json"



class RepoList extends React.Component {
  state = {
    repos: []
  }

  componentDidMount() {
    axios.get(ORG_QUERY)
      .then(res => {
        console.log(res.data)
        const repos = res.data;
        this.setState({ repos });
      })
  }

  render() {
    return (
      <div >
        <Grid container spacing={2}  
                direction="row"
                justify="center"
                alignItems="center">
  
          { this.state.repos.map(
            repo => <Grid item xs={12} sm={6} md={3} key={this.state.repos.indexOf(repo)}>
              <AppReviewCard title={repo.name} desc={repo.description}/></Grid>)}
          
        </Grid>
      </div>
    )
  }
}


export default RepoList