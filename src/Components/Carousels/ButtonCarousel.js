import React from 'react';
import ButtonList from '../Containers/ButtonList';
import '../../Styles/Footer.css';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return { links: state.links };
};

const ButtonCarousel = ({links}) => <ButtonList data={links} />

export default connect(mapStateToProps)(ButtonCarousel)