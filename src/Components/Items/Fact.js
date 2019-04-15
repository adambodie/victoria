import React from 'react';

const Fact = ({name}) => (
	<div className="photo slide">
		<img src={'https://victoria.bodiewebdesign.com/Images/fact.jpg'} alt="Did You Know?"/>
			<div className="photo-overlay">
				<h3>{name}</h3> 
			</div>
		</div>
);

export default Fact;
