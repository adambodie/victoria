import React from 'react'
import Slider from 'react-slick'
import Photo from '../items/Photo'

const settings = {
	dots: true,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
}

const PhotoList = ({ data, begin, end }) => (
	<Slider ref={c => this.slider = c } {...settings}>
		{data.map((x, index) =>
			<div key={x.id}>
				<Photo id={x.id} title={x.title}  />
			</div>
			).filter((x, index) => index >= begin && index <= end)
		}
	</Slider>
)

export default PhotoList
