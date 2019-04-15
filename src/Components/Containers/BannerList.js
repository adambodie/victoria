import React, { Component } from 'react';
import Slider from 'react-slick';
import Banner from '../Items/Banner';

export default class BannerList extends Component {

	render() {
		const { data } = this.props;
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

	return(
		<div className="banner">
			<div className="bannerSlick">
				<Slider ref={c => this.slider = c } {...settings}>
					{data.map((x, index) =>
						<div key={index}>
							<Banner name={x.name} alt={x.alt} />
						</div>
					)}
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
