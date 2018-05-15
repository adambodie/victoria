import React, { Component } from 'react';
import BannerList from '../Containers/BannerList';
import '../../Styles/Slick.css';

export default class BannerCarousel extends Component {
  constructor(props) {
      super(props);
      this.state = {
        banners: [{'name': 'banner1'},{'name': 'banner2'}, {'name': 'banner3'}, {'name': 'banner4'}, {'name': 'banner5'}]
      };
    }
  render() {
	return (
	<div className="banner">
		<BannerList data={this.state.banners} />
			<div className="title">
				<h1>Port Angeles to Victoria</h1>
				<h1>See Adam's Black Ball Trip</h1>
			</div>
	</div>
	);
	}
}
