import React, { Component , useState, useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';




const PagePagination = ({postsPerPage , totalPosts, setPage}) => {
		
	
	return (
	    <Pagination count={Math.ceil(totalPosts / postsPerPage)} color="primary" onChange={(event,val)=> setPage(val)}/>

    );
	
}


export default PagePagination