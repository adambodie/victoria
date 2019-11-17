import React from 'react';
import '../../Styles/Home.css';
import HomeList from '../Containers/HomeList';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return { features: state.features };
};

const HomeRoute = ({features}) => (
	<div className="home">
		<HomeList data={features} />
	</div>
);

export default connect(mapStateToProps)(HomeRoute)
