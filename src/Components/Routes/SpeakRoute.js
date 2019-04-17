import React, { Component } from 'react';
import '../../Styles/Speak.css';

export default class SpeakRoute extends Component {
	  constructor() {
		super();
			this.state = {
				text: '',
				value: '',
				buttons: [
				"ʔ", "a", "c", "c̕", "č", "č̕","e", "ə", "h", "i", "k", "kʷ", "k̕ʷ", "l", 
				"ɬ", "ƛ̕", "m", "m̕", "n", "n̕", "ŋ", "ŋ̕","p", "p̕", "q", "q̕", "qʷ", "q̕ʷ", 
				"s", "š", "t", "t̕", "u", "w", "w̕", "xʷ", "x̣", "x̣ʷ", "y", "y̕", 
				"?", ".", ",", "!", "'", "\""
				]
			};
			this.handleSubmit = this.handleSubmit.bind(this);
			this.handleChange = this.handleChange.bind(this);
			
		}
		handleSubmit(e) {
			if (this.state.value === 'Delete') {
				const length = this.state.text.length;
				this.setState({text: this.state.text.substr(0,length - 1)});
			} else if (this.state.value === 'Clear'){
				this.setState({text: ""});
			} else if (this.state.value === 'Space'){
				this.setState({text: this.state.text + " "});
			} else {
				this.setState({text: this.state.text + this.state.value});
		}
			e.preventDefault();
		}
		handleChange(e) {
			this.setState({value: e.target.value});
		}
	render() {
		const { text, buttons } = this.state;
		return (
			<div className='keyboard'>
				<h1 className='keyboard-header'>Klallam Keyboard</h1>
				<form onSubmit={this.handleSubmit}>
					<h1 className='keyboard-enter'>{text}</h1>
					<div className="keys">
						{buttons.map((x, index) => <input onClick={this.handleChange} type='submit' value={x} key={index}/>)}
						<input onClick={this.handleChange} type='submit' value="Delete"/>
						<input onClick={this.handleChange} type='submit' value="Clear"/>
						<input onClick={this.handleChange} type='submit' value="Space"/>
					</div>
				</form>
			</div>
		)
	}
}
