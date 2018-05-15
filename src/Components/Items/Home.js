import React from 'react';

const Home = props => (
				<div className="home-photo">
					<img src={`https://s3-us-west-2.amazonaws.com/victoria.bodiewebdesign.com/Images/${props.image}.jpg`} alt={props.alt}/>
					<div className="home-overlay">
						<h3>{props.title}</h3>
						<p>{props.text}</p>
					</div>
				</div>
			);

export default Home;
