import React from 'react';

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
            repo => <Grid item  spacing={1} xs={12} sm={6} md={3} key={this.state.repos.indexOf(repo)}>
              <AppReviewCard data={repo.name}/></Grid>)}
          
        </Grid>
      </div>
    )
  }
}


export default RepoList