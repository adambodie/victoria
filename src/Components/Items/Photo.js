import React from 'react'

const Photo = ({id, title}) => (
	<div>
		<img src={`../assets/photos/${id}_o.jpg`} alt={title}/>
		<h3>{title}</h3>
	</div>
)

export default Photo
