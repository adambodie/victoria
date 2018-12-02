import React, { Component } from 'react';
import Slider from 'react-slick';
import Photo from '../Items/Photo';

export default class PhotoList extends Component {

	render() {
		let results = this.props.data;
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
		};

    return(
      <Slider ref={c => this.slider = c } {...settings}>
        {results.map((x, index) =>
          <div key={x.id}>
            <Photo id={x.id} title={x.title}  />
          </div>
        ).filter((x, index) => index >= this.props.begin && index <= this.props.end)}
    </Slider>
  );
}
}
