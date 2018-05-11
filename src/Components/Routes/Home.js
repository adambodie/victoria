import React, { Component } from 'react';
import '../../Styles/Home.css';
import Button from '../../Components/Button.js';


export default class Home extends Component {
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
			let frontPageFeatures = this.state.features.map((feature, index) =>
				<div className="home-container" key={ index }>
							<div className="home-photo">
								<img src={feature.image} alt={feature.alt}/>
								<div className="home-overlay">
								  <h3>{feature.title}</h3>
								  <p>{feature.text}</p>
								</div>
							</div>
						</div>
			);
			return (
			  <div>
				<Button />
				<div className="content-parent">
					<div className="content">
						{frontPageFeatures}
					</div>
				</div>
			</div>
			);
}
}
