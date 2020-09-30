import React, {Component} from 'react';
import './App.css';

import AppReviewCard from './components/CardComponent.js'
import SearchBarComponent from './components/SearchComponent.js'
import RepoList from './components/RepoList.js'
import MyAppBar from './components/navbar.js'


class App extends Component {
  render() {
    return (
        <div className="App">
          <MyAppBar/>
          <div className="App-header">
            <img src={process.env.PUBLIC_URL + "/images/1.png"}/></div>
          <SearchBarComponent/>
          <RepoList/>
          <div className="App-header"/>
        </div>
    );
  }
}

export default App;
