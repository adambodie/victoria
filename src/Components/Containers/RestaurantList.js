import React, { Component } from 'react';
import Restaurant from '../Items/Restaurant';
export default class EatList extends Component {

	render() {
		let results = this.props.data;
		let restaurantReviews = results.map((x, index) => 
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
			);
	
		return(
			<div>
				<h1 className='pageTitle'>Restaurant Reviews</h1>
				{restaurantReviews}
			</div>
			);
		}
}
