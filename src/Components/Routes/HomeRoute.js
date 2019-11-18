import React from 'react'
import '../../styles/Home.css'
import HomeList from '../containers/HomeList'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return { features: state.features }
}

const HomeRoute = ({features}) => (
	<div className='home'>
		<HomeList data={features} />
	</div>
)

export default connect(mapStateToProps)(HomeRoute)
