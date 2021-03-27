import React, {Component} from 'react';
import './App.css';


import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RedditIcon from '@material-ui/icons/Reddit';
import YouTubeIcon from '@material-ui/icons/YouTube';


import AppReviewCard from './components/CardComponent.js'
import SearchBarComponent from './components/SearchComponent.js'
import RepoList from './components/RepoList.js'
import MyAppBar from './components/navbar.js'

import AppDetail from './components/AppDetail.js'


import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));


class App extends Component {
  render() {
    return (
	    <HashRouter basename='/'>
		<Switch>
			<Route path="/" exact component= {Home} />
			<Route path="/:name" component= {AppDetail} />
		</Switch>
		</HashRouter>
    );
  }
}

const Home = () => (

	<div className="App">     
	<MyAppBar/>
	<div className="App-header">
	<img src={process.env.PUBLIC_URL + "/images/1.png"}/></div>
	<SearchBarComponent/>
	<RepoList/>
	<Pagination count={10} color="primary" />
	<div className="App-header"/>
	<GitHubIcon />
	<InstagramIcon />
	<TwitterIcon />
	<LinkedInIcon />
	<RedditIcon />
	<YouTubeIcon />
    </div>

);

export default App;
