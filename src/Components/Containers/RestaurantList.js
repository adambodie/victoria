import React from 'react'
import Restaurant from '../items/Restaurant'

const RestaurantList = ({ data }) => (
	<div>
		<h1 className='pageTitle'>Restaurant Reviews</h1>
		{data.map((x, index) => 
			<div  key={index}>
				<Restaurant 
					title={x.title} 
					image={x.image} 
					address={x.address} 
					paragraph={x.paragraph}
					/>
			</div>
		)}
	</div>
)

export default RestaurantList
