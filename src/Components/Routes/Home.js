import React from 'react';
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <div className="buttons">
		<div><Link to='/visit'>A</Link></div>
		<div><Link to='/eat'>B</Link></div>
		<div><Link to='/learn'>C</Link></div>
	</div>
	<div className="content-parent">
		<div className="content">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
</div>
);

export default Home;
