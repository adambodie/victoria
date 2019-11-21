import React from 'react'
import { connect } from 'react-redux'
import BannerList from '../containers/BannerList'
import '../../styles/Slick.css'

const mapStateToProps = state => {
	return { banners: state.banners }
}
const BannerCarousel = ({banners}) => (
	<div className='banner'>
		<div className='bannerSlick'>
			<BannerList data={banners} />
			<div className='banner-title'>
				<h1>Port Angeles to Victoria</h1>
				<h1>See Adam's Black Ball Trip</h1>
			</div>
		</div>
	</div>
)

export default connect(mapStateToProps)(BannerCarousel)
