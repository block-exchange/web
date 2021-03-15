import React ,  { useState, useEffect } from 'react';
import axios from 'axios';


const url = 'https://api.github.com/graphql'
const token = process.env.REACT_APP_ACCESS_TOKEN

const json = {'query' : '{repository (owner: "Block-Exchange", name: "'+ 'hello' +'") {openGraphImageUrl}}' }

const options = {
  headers: {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : "",
  }
};


function AppDetail({match}){
	
	const[item, setItem] = useState({
		images : {}
	});
	
	
	useEffect(()=>{
		
		fetchItem();
		console.log(match);
		
	}, []);
	
	
	
	const fetchItem = async () => {
		
		const res = await axios.post(url, json, options)
            .then((res) => {
              setItem(res.data.data.repository.openGraphImageUrl);
            })
            .catch((err) => {
              console.log(err);
        })
    };
	
	return (
	
	<div>
	
	</div>
	
	);

}

export default AppDetail;