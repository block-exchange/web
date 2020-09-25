import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import logo from './logo.svg';
import './App.css';

import RecipeReviewCard from './components/CardComponent.js'



const client = new ApolloClient({
      uri : ""
});


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RecipeReviewCard/>
        </header>
      </div>
    );
  }
}

export default App;
