import React from 'react'
import Slider from 'react-slick'
import Banner from '../items/Banner'

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
}

const BannerList = ({data}) => (
	<Slider ref={c => this.slider = c } {...settings}>
		{data.map((x, index) => <Banner name={x.name} alt={x.alt} key={index}/>)}
	</Slider>
)

export default BannerList
