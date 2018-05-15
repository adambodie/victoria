import React from 'react';

const Restaurant = props => (
  <div className='restaurant'>
	<h2 className="restaurantTitle">{props.title}</h2>
	<div className="restaurantImage">
		<img src={props.image} alt={props.title} className="img-fluid"/>
		<div className="address">
			<p>{props.addressOne}</p>
			<p>{props.addressTwo}</p>
		</div>
	</div>
	<div className='paragraph'>
		<p>{props.paragraphOne}</p>
		<p>{props.paragraphTwo}</p>
		<p>{props.paragraphThree}</p>
	</div>
  </div>
);

export default Restaurant;
