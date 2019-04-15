import React from 'react';

const Photo = ({id, title}) => (
	<div>
		<img src={`https://victoria.bodiewebdesign.com/Images/${id}_o.jpg`} alt={title}/>
		<h3>{title}</h3>
	</div>
);

export default Photo;
