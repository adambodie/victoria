import React from 'react'

const Restaurant = ({title, image, address, paragraph}) => (
	<div className='restaurant'>
		<h2 className='restaurantTitle'>{title}</h2>
		<div className='restaurantImage'>
			<img src={`..//assets/${image}.jpg`} alt={title} className='img-fluid'/>
			<div className='address'>
				{address.map((x, index) => <p key={index}>{x}</p>)}
			</div>
		</div>
		<div className='paragraph'>
			{paragraph.map((x, index) =><p key={index}>{x}</p>)}
		</div>
	</div>
)

export default Restaurant
