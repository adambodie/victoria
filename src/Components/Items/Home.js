import React from 'react';

const Home = ({image, alt, title, text}) => (
	<div className="home-photo">
		<img src={`https://victoria.bodiewebdesign.com/Images/${image}.jpg`} alt={alt}/>
		<div className="home-overlay">
			<h3>{title}</h3>
			<p>{text}</p>
		</div>
	</div>
);

export default Home;
