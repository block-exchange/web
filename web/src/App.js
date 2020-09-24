import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import logo from './logo.svg';
import './App.css';


const client = new ApolloClient({
      uri : ""
});


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="search-container">
          <form action="">
            <input type="text" placeholder="Search.." name="search"></input>
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
