import React, { Component } from 'react';
import BannerList from '../Containers/BannerList';
import '../../Styles/Slick.css';

export default class BannerCarousel extends Component {
  constructor(props) {
      super(props);
      this.state = {
        banners: [{'name': 'coast-banner', 'alt' : 'Coastline'},{'name': 'harbour-banner', 'alt' : 'Inner Harbour'}, {'name': 'parliament-banner', 'alt' : 'British Columbia Parliament Buildings'}, {'name': 'port-angeles-banner', 'alt' : 'Port Angeles'}],
      };
    }
  
    
  render() {

	return (
		<BannerList data={this.state.banners} />
	);
	}
}
