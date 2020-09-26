import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

import AppReviewCard from './components/CardComponent.js'
import SearchBarComponent from './components/SearchComponent.js'
import RepoList from './components/RepoList.js'



const client = new ApolloClient({
      uri : ""
});


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBarComponent/>
          <AppReviewCard/>
          <RepoList/>
        </header>
      </div>
    );
  }
}

export default App;
