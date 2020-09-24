import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import BlockQuery from './components/query'
import logo from './logo.svg';
import './App.css';


const client = new ApolloClient({
      uri : ""
});


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Block App Exchange
        <BlockQuery/>
      </header>
    </div>
  );
}

export default App;
