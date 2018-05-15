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
  let length = this.props.page;
  let photos = results.map((x, index) =>
    <div key={x.id}>
    <Photo farm={x.farm} server={x.server} id={x.id} secret={x.secret} title={x.title} tags={x.tags} index={index + 1} length={length}/>
    </div>
  )
  
  return(
    <Slider ref={c => this.slider = c } {...settings}>
      {photos}
    </Slider>
  );
}
}
