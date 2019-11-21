import React from 'react'
import Restaurant from '../items/Restaurant'

const RestaurantList = ({ data }) => (
	data.map((x, index) => 
		<Restaurant 
			key={index}
			title={x.title} 
			image={x.image} 
			address={x.address} 
			paragraph={x.paragraph}
		/>
	)
)

export default RestaurantList
