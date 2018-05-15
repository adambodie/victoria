import React, { Component } from 'react';
import BannerList from '../Containers/BannerList';
import '../../Styles/Slick.css';

export default class BannerCarousel extends Component {
  constructor(props) {
      super(props);
      this.state = {
        banners: [{'name': 'coast-banner'},{'name': 'harbour-banner'}, {'name': 'parliament-banner'}, {'name': 'port-angeles-banner'}]
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
