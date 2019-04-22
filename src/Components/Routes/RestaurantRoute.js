import React, { Component } from 'react';
import '../../Styles/Eat.css';
import RestaurantList from '../Containers/RestaurantList';
import axios from 'axios';

export default class RestaurantRoute extends Component {
	constructor() {
		super();
		this.state = {
			restaurants: []
		}
	}
	componentDidMount() {
		axios.get(`https://victoria.bodiewebdesign.com/static/data/restaurants.json`)
		.then(response => {
			this.setState({
				restaurants: response.data
			});
		})
		.catch(error => {
			console.log('Error fetching and parsing Photographs data', error);
			});
		}
	render() {
		const { restaurants } = this.state;
		return (
			<div className="restaurants">
				<RestaurantList data={restaurants} />
			</div>
		)
	}
}
