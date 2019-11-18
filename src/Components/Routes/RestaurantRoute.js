import React from 'react'
import '../../styles/Eat.css'
import RestaurantList from '../containers/RestaurantList'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return { restaurants: state.restaurants }
}

const RestaurantRoute = ({ restaurants }) => (
	<div className='restaurants'>
		<RestaurantList data={restaurants} />
	</div>
)

export default connect(mapStateToProps)(RestaurantRoute)