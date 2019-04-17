import React, { Component } from 'react';
import ButtonList from '../Containers/ButtonList';

export default class ButtonCarousel extends Component {
	
	constructor() {
		super();
		this.state = {
			buttons: [
				{ 'link' : '/visit', 'name' : 'camera'},
				{ 'link' : '/eat', 'name' : 'cutlery' },
				{ 'link' : '/learn', 'name' : 'graduation-cap' },
				{ 'link' : '/buy', 'name' : 'usd'},
				{ 'link' : '/speak', 'name' : 'bullhorn'},
			]
		}
	}	
	render() {
			return (
			<ButtonList data={this.state.buttons} />
			)
		
	}
}
