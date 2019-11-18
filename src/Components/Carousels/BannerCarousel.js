import React from 'react'
import { connect } from 'react-redux'
import BannerList from '../containers/BannerList'
import '../../styles/Slick.css'

const mapStateToProps = state => {
	return { banners: state.banners }
}
const BannerCarousel = ({banners}) => <BannerList data={banners} />

export default connect(mapStateToProps)(BannerCarousel)
