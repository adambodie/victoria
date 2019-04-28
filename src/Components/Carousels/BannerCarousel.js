import React, { Component } from 'react';
import axios from 'axios';
import BannerList from '../Containers/BannerList';
import '../../Styles/Slick.css';

export default class BannerCarousel extends Component {
	constructor() {
		super();
		this.state = {
			banners: [],
		};
	}
  	componentDidMount() {
		axios.get(`https://victoria.bodiewebdesign.com/static/data/banner.json`)
		.then(response => {
			this.setState({
				banners: response.data
			});
		})
		.catch(error => {
			console.log('Error fetching and parsing data');
			});
		}
    
	render() {
		const { banners } = this.state;
		return (
			<BannerList data={banners} />
		);
	}
}
