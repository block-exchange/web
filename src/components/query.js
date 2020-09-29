import React ,  { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/styles';



const url = 'https://api.github.com/graphql'
const json = {'query' : '{repository (owner: "Block-Exchange", name: "app-sawtooth") {openGraphImageUrl}}' }
const token = "a4478bb771d7a43232f55169f65435a41953c7c2"

const options = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : "",
    }
  };


function RepoImage () {
    const [image, setData] = useState([]);


    useEffect(() => {
        fetchData();
      }, []);

    
    const fetchData = async () => {
      const res = await axios.post(url,json, options)
                .then((res) => {
                console.log(res.data.data.repository);
                setData(res.data);
            })
            .catch((err) => {
                console.log("ERROR: ====", err);
            })
            };

    return (
        <div>
          {image}
        </div>
    )
}


export default RepoImage