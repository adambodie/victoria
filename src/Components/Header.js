import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BannerCarousel from './BannerCarousel';

export default class Header extends Component {
  render() {
	return (
	<div>
		<div className="header">
			<nav className="navbar navbar-expand-md navbar-dark bg-dark">
				<a className="navbar-brand">Black Ball</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
			<div className="collapse navbar-collapse" id="navbarCollapse">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link to='/'>Home</Link>
					</li>
					<li className="nav-item">
						<Link to='/visit'>Visit</Link>
					</li>
					<li className="nav-item">
						<Link to='/eat'>Eat</Link>
					</li>
					<li className="nav-item">
						<Link to='/learn'>Learn</Link>
					</li>
					<li className="nav-item">
						<Link to='/buy'>Buy</Link>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	<BannerCarousel />
	</div>
	);
	}
}
