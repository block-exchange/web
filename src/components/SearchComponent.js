import React ,  { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import SearchBar from "material-ui-search-bar";
import { CenterFocusStrong } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    marginLeft: 500,
    marginTop:50,
  },

}));


function doSomethingWith (){
  this.state = ""
}



function SearchBarComponent (){
  const classes = useStyles();
  const [count, setCount] = useState();

      return (
         <SearchBar
          className={classes.root}
          value={count}
          onChange={(newValue) => setCount({ value: newValue })}
          onRequestSearch={() => doSomethingWith(this.state.value)}
        />
    );
}
  
export default SearchBarComponent