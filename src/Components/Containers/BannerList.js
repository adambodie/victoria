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
	<div className='banner'>
		<div className='bannerSlick'>
			<Slider ref={c => this.slider = c } {...settings}>
				{data.map((x, index) =>
					<div key={index}>
						<Banner name={x.name} alt={x.alt} />
					</div>
				)}
			</Slider>
		</div>
		<div className='banner-title'>
			<h1>Port Angeles to Victoria</h1>
			<h1>See Adam's Black Ball Trip</h1>
		</div>
	</div>
)

export default BannerList
