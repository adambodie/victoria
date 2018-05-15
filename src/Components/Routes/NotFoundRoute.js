import React from 'react';
import '../../Styles/NotFound.css';

const NotFoundRoute = ({ location }) => (
	<div className="notFound">
		<h1>The link to {location.pathname} is not found</h1>
		<img src={require('../../Images/not-found.jpg')} alt="Not Found" className="img-fluid"/>
	</div>
);

export default NotFoundRoute;

