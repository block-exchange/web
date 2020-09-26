import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },

}));


function doSomethingWith (){
  this.state = ""
}



class SearchBarComponent extends React.Component {

    constructor(props) {
      super(props)
      this.state = ""
    }
  
    render () {
      return (
      <div>
         <SearchBar
          value={this.state.value}
          onChange={(newValue) => this.setState({ value: newValue })}
          onRequestSearch={() => doSomethingWith(this.state.value)}
        />
      </div>
    );
  }
}
  
export default SearchBarComponent