import React, { Component } from 'react';

export default class SpeakList extends Component {
	  constructor() {
		super();
			this.state = {
				value: '',
				text: ''
			};
			this.handleSubmit = this.handleSubmit.bind(this);
			this.handleChange = this.handleChange.bind(this);
			
		}
		handleSubmit(e) {
			const { value, text } = this.state;
			if (value === 'Delete') {
				const length = text.length;
				this.setState({text: text.substr(0,length - 1)});
			} else if (value === 'Clear'){
				this.setState({text: ""});
			} else if (value === 'Space'){
				this.setState({text: text + " "});
			} else {
				this.setState({text: text + value});
		}
			e.preventDefault();
		}
		handleChange(e) {
			this.setState({value: e.target.value});
		}
	render() {
		const { buttons } = this.props;
		const { text } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<h1 className='keyboard-enter'>{text}</h1>
				<div className="keys">
					{buttons.map((x, index) => <input className={`button-${index}`} onClick={this.handleChange} type='submit' value={x} key={index}/>)}
				</div>
			</form>
		)
	}
}


