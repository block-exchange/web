import React from 'react';

import axios from 'axios';

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
      <ul>
        { this.state.repos.map(repo => <li>{repo.name}</li>)}
      </ul>
    )
  }
}


export default RepoList