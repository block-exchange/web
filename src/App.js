import React, {Component} from 'react';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from 'apollo-link-http';

import axios from 'axios';

import './App.css';

import AppReviewCard from './components/CardComponent.js'
import SearchBarComponent from './components/SearchComponent.js'
import RepoList from './components/RepoList.js'
import MyAppBar from './components/navbar.js'
import RepoImage from './components/query.js'




const client = new ApolloClient({ 
  link: new createHttpLink(
      {
        uri : "https://developer.github.com/v4/explorer/",
      }
  ),
  cache: new InMemoryCache(),
  fetchOptions: {
    credentials: 'include'

  },
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <MyAppBar/>
          <div className="App-header"/>
          <SearchBarComponent/>
          <RepoList/>
          <RepoImage/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
