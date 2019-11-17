import React from 'react';
import BannerList from '../Containers/BannerList';
import '../../Styles/Slick.css';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return { banners: state.banners };
};
const BannerCarousel = ({banners}) => <BannerList data={banners} />

export default connect(mapStateToProps)(BannerCarousel)
