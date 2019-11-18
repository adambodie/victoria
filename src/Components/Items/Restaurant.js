import React from 'react'

const Restaurant = ({title, image, addressOne, addressTwo, paragraphOne, paragraphTwo, paragraphThree}) => (
	<div className='restaurant'>
		<h2 className='restaurantTitle'>{title}</h2>
		<div className='restaurantImage'>
			<img src={`../assets/${image}.jpg`} alt={title} className='img-fluid'/>
			<div className='address'>
				<p>{addressOne}</p>
				<p>{addressTwo}</p>
			</div>
		</div>
		<div className='paragraph'>
			<p>{paragraphOne}</p>
			<p>{paragraphTwo}</p>
			<p>{paragraphThree}</p>
		</div>
	</div>
)

export default Restaurant
