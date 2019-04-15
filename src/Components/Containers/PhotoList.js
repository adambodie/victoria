import React, { Component } from 'react';
import Slider from 'react-slick';
import Photo from '../Items/Photo';

export default class PhotoList extends Component {

	render() {
		const { data, begin, end } = this.props;
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
		};
		return(
			<Slider ref={c => this.slider = c } {...settings}>
				{data.map((x, index) =>
					<div key={x.id}>
						<Photo id={x.id} title={x.title}  />
					</div>
					).filter((x, index) => index >= begin && index <= end)
				}
			</Slider>
		);
	}
}
