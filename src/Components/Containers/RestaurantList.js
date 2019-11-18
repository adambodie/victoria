import React from 'react';
import Restaurant from '../items/Restaurant';


const RestaurantList = ({ data }) => (
	<div>
		<h1 className='pageTitle'>Restaurant Reviews</h1>
		{data.map((x, index) => 
			<div  key={index}>
				<Restaurant 
					title={x.title} 
					image={x.image} 
					addressOne={x.address.one} 
					addressTwo={x.address.two}
					paragraphOne={x.paragraph.one}
					paragraphTwo={x.paragraph.two}
					paragraphThree={x.paragraph.three}
					/>
			</div>
		)}
	</div>
);


export default RestaurantList;
