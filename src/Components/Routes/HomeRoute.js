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
						'image': 'port-angeles',
						'alt': 'Port Angeles',
						'title': 'Port Angeles',
						'text': 'Visit the Gateway to the Olympic National Park',
					},
					{
						'image': 'coho',
						'alt': 'MV Coho',
						'title': 'MV Coho',
						'text': 'Take the Ferry from Port Angeles to Victoria',
					},
					{
						'image': 'chowder',
						'alt': 'Cuisine',
						'title': 'Cuisine',
						'text': 'Enjoy some fine Pacific Northwest cuisine',
					},
					{
						'image': 'klallam',
						'alt': 'Native Americans',
						'title': 'Native Americans',
						'text': 'Learn about the Native American Culture of the Pacific Northwest',
					},
					{
						'image': 'victoria',
						'alt': 'Victoria',
						'title': 'Victoria',
						'text': 'Enjoy the Sights of "The Garden City"',
					},
					{
						'image': 'rainbow',
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
