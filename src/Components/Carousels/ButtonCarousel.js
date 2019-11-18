import React from 'react'
import { connect } from 'react-redux'
import ButtonList from '../containers/ButtonList'
import '../../styles/Footer.css'

const mapStateToProps = state => {
	return { links: state.links }
}

const ButtonCarousel = ({links}) => <ButtonList data={links} />

export default connect(mapStateToProps)(ButtonCarousel)