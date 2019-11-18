import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
	<footer>
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
			<p>Adam Bodie &copy;{new Date().getFullYear()}</p>
		</nav>
	</footer>
);

export default Footer;
