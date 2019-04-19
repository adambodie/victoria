import React, { Component } from 'react';
import SpeakList from '../Containers/SpeakList';
import '../../Styles/Speak.css';

export default class SpeakRoute extends Component {
	  constructor() {
		super();
			this.state = {
				buttons: [
				"ʔ", "a", "c", "c̕", "č", "č̕","e", "ə", "h", "i", "k", "kʷ", "k̕ʷ", "l", 
				"ɬ", "ƛ̕", "m", "m̕", "n", "n̕", "ŋ", "ŋ̕","p", "p̕", "q", "q̕", "qʷ", "q̕ʷ", 
				"s", "š", "t", "t̕", "u", "w", "w̕", "xʷ", "x̣", "x̣ʷ", "y", "y̕", 
				"?", ".", ",", "!", "'", "\"", "Delete", "Clear", "Space"
				]
			};
	}
	render() {
		const { buttons } = this.state;
		return (
			<div className='keyboard'>
				<h1 className='keyboard-header'>Klallam Keyboard</h1>
				<SpeakList buttons={buttons}  />
			</div>
		)
	}
}
