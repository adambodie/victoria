import React, { Component } from 'react';
import '../../Styles/Home.css';
import HomeList from '../Containers/HomeList';
import ButtonCarousel from '../Carousels/ButtonCarousel.js';

export default class HomeRoute extends Component {
	constructor() {
		super();
		this.state = {
				features: [
					{
						'image': require('../../Images/port-angeles.jpg'),
						'alt': 'Port Angeles',
						'title': 'Port Angeles',
						'text': 'Visit Port Angeles, Gateway to the Olympic National Park',
					},
					{
						'image': require('../../Images/coho.jpg'),
						'alt': 'MV Coho',
						'title': 'MV Coho',
						'text': 'Take the MV Coho from Port Angeles to Victoria',
					},
					{
						'image': require('../../Images/chowder.jpg'),
						'alt': 'Cuisine',
						'title': 'Cuisine',
						'text': 'Enjoy some fine Pacific Northwest cuisine',
					},
					{
						'image': require('../../Images/klallam.jpg'),
						'alt': 'Native Americans',
						'title': 'Native Americans',
						'text': 'Learn about the Native Americans of the Pacific Northwest',
					},
					{
						'image': require('../../Images/victoria.jpg'),
						'alt': 'Victoria',
						'title': 'Victoria',
						'text': 'Enjoy the Sights of Victoria, "The Garden City"',
					},
					{
						'image': require('../../Images/rainbow.jpg'),
						'alt': 'Amazing',
						'title': 'Amazing',
						'text': 'Witness something truly amazing',
					}
				]
		
			}
		}	
		render(){
			return (
			  <div>
				<ButtonCarousel />
				<HomeList data={this.state.features} />
			</div>
			);
}
}
