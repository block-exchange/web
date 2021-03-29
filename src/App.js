import React, { Component , useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RedditIcon from '@material-ui/icons/Reddit';
import YouTubeIcon from '@material-ui/icons/YouTube';


import AppReviewCard from './components/CardComponent.js'
import SearchBarComponent from './components/SearchComponent.js'
import Posts from './components/posts.js'
import MyAppBar from './components/navbar.js'
import PagePagination from './components/pagination.js'
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



const ORG_QUERY = "https://api.github.com/orgs/Block-exchange/repos?per_page=200" 


const App = () => {
	const[posts, setPosts] = useState([]);
	const[curentPage, setCurrentPage] = useState(1);
	const[postsPerPage, setPostsPerPage] = useState(10);
	
	
	const indexOfLastPost = curentPage * postsPerPage
	const indexOfFirstPost = indexOfLastPost - postsPerPage
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
		
	
	useEffect(() => {
        fetchData();
      }, []);

    
    const fetchData = async () => {
      const res = await axios.get(
        ORG_QUERY,
      );
      setPosts(res.data);
    };
	
	
	const setPage = (val) => setCurrentPage(val);
	
    return (
	    <div>
	    <HashRouter basename='/'>
		<Switch>
			<Route path="/" exact render={() => (<Home posts = {currentPosts} postsPerPage={postsPerPage} totalPosts = {posts.length}  setPage={setPage}/> )}/>
			<Route path="/:name" component= {AppDetail} />
		</Switch>
		</HashRouter>
		
		</div>
    );
};

const Home = ({posts, postsPerPage, totalPosts, setPage}) => (

	<div className="App">     
	<MyAppBar/>
	<div className="App-header">
	<img src={process.env.PUBLIC_URL + "/images/1.png"}/></div>
	<SearchBarComponent/>
	<Posts posts={posts}/>
	<PagePagination postsPerPage={postsPerPage} totalPosts = {totalPosts} setPage={setPage}/>
	<div className="App-header">
	<GitHubIcon />
	<InstagramIcon />
	<TwitterIcon />
	<LinkedInIcon />
	<RedditIcon />
	<YouTubeIcon />
	</div>
    </div>

);




	
export default App;
