import React from 'react';

const Fact = props => (
	<div className="photo slide">
		<img src={require('../../Images/fact.jpg')} alt="Did You Know?"/>
			<div className="photo-overlay">
				<h3>{props.name}</h3> 
			</div>
		</div>
);

export default Fact;
