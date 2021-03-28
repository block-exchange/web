import React, { Component , useState, useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';




const PagePagination = ({postsPerPage , totalPosts}) => {
	
	return (
	    <Pagination count={Math.ceil(totalPosts / postsPerPage)} color="primary" />

    );
	
}


export default PagePagination