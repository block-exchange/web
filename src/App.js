import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import axios from 'axios';

import './App.css';

import AppReviewCard from './components/CardComponent.js'
import SearchBarComponent from './components/SearchComponent.js'
import RepoList from './components/RepoList.js'
import MyAppBar from './components/navbar.js'



const client = new ApolloClient({
      uri : "https://developer.github.com/v4/explorer/"
});


class App extends Component {
  render() {
    return (
      <div className="App">
        <MyAppBar/>
        <header className="App-header" />
        <SearchBarComponent/>
        <RepoList/>
      </div>
    );
  }
}

export default App;
