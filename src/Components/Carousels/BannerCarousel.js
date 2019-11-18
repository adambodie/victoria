import React from 'react';
import BannerList from '../containers/BannerList';
import '../../styles/Slick.css';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return { banners: state.banners };
};
const BannerCarousel = ({banners}) => <BannerList data={banners} />

export default connect(mapStateToProps)(BannerCarousel)
