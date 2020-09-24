import React , { Component } from 'react';
import gql from 'graphql-tag';
import Query from 'react-apollo';


const BLOCK_QUERY = gql`
      query Block_Query {

      }
`

export class BlockQuery extends Component{
       render(){

       return (
       <div>
          <h1>BlockQuery</h1>
       </div>

       )
  }
}

export default BlockQuery