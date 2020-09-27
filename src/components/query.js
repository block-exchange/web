import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const RepoImage = () => (
    <Query query={gql`
        {
            repository (owner: "Block-Exchange", name: "app-sawtooth") {
                  openGraphImageUrl
            }
        }
    `}
    >
        {({loading, error, data}) => {
            if (loading) return <p>Loading ...</p>;
            if (error) return <p>Error :(</p>;
            
            return data.repository.map((image) => (
            ));
        }}
    </Query>
);

export default RepoImage;