import React from 'react';
import SpeakList from '../Containers/SpeakList';
import '../../Styles/Speak.css';

import { connect } from 'react-redux';

const mapStateToProps = state => {
	return { buttons: state.buttons };
};

const SpeakRoute = ({ buttons }) => (
	<div className='keyboard'>
		<h1 className='keyboard-header'>Klallam Keyboard</h1>
		<SpeakList buttons={buttons}  />
	</div>
)
	

export default connect(mapStateToProps)(SpeakRoute)