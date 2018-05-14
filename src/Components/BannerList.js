import React, { Component } from 'react';
import Slider from 'react-slick';
import Banner from './Banner';

export default class BannerList extends Component {

	render() {
		let results = this.props.data;
		const settings = {
			dots: true,
			infinite: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 10000,
			slidesToShow: 1,
			speed: 3000,
			slidesToScroll: 1,
			centerPadding: 0,
			fade: true,
		};
  let photos = results.map((x, index) =>
  <div key={index}>
    <Banner name={x.name} />
    </div>
  )
  
  return(
  <div className="bannerSlick">
    <Slider ref={c => this.slider = c } {...settings}>
      {photos}
    </Slider>
    </div>
  );
}
}
