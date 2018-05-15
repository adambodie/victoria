import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
	const year = new Date().getFullYear();
	return (
		<div>
			<nav className="navbar navbar-expand-md navbar-dark bg-dark">
				<p style={{ color: 'white' }}>Adam Bodie &copy;{year}</p>
			</nav>
		</div>
	);
	}
}
