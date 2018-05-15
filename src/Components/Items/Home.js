import React from 'react';

const Home = props => (
				<div className="home-photo">
					<img src={props.image} alt={props.alt}/>
					<div className="home-overlay">
						<h3>{props.title}</h3>
						<p>{props.text}</p>
					</div>
				</div>
			);

export default Home;
