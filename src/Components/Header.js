import React, { Component } from 'react';

export default class Header extends Component {
  render() {
	return (
		<div className="header">
			<nav className="navbar navbar-expand-md navbar-dark bg-dark">
				<a className="navbar-brand" href="#">Black Ball</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
			<div className="collapse navbar-collapse" id="navbarCollapse">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Visit</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Eat</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Learn</a>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	);
	}
}
