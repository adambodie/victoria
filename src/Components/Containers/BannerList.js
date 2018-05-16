import React, { Component } from 'react';
import Slider from 'react-slick';
import Banner from '../Items/Banner';

export default class BannerList extends Component {

	render() {
		let results = this.props.data;
		const settings = {
			dots: true,
			infinite: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 10000,
			speed: 2000,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true
		};
		
   
  let photos = results.map((x, index) =>
	<div key={index}>
		<Banner name={x.name} alt={x.alt} />
	</div>
  )
  
  return(
	<div className="banner">
		<div className="bannerSlick">
			<Slider ref={c => this.slider = c } {...settings}>
				{photos}
			</Slider>
		</div>
		<div className="title">
			<h1>Port Angeles to Victoria</h1>
			<h1>See Adam's Black Ball Trip</h1>
		</div>
	</div>
  );
}
}
