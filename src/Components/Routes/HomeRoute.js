import React, { Component } from 'react';
import '../../Styles/Home.css';
import HomeList from '../Containers/HomeList';
import ButtonCarousel from '../Carousels/ButtonCarousel.js';
import axios from 'axios';

export default class HomeRoute extends Component {
	constructor() {
		super();
		this.state = {
				features: []
			}
		}
		componentDidMount() {
			axios.get('https://victoria.bodiewebdesign.com/static/data/features.json')
				.then(response => {
					this.setState({
						features: response.data
					});
				})
				.catch(error => {
					console.log('Error fetching and parsing Photographs data', error);
				});
		}
		render(){
			const { features } = this.state;
			return (
				<div>
					<ButtonCarousel />
					<HomeList data={features} />
				</div>
			);
		}
}
