import React, { Component } from 'react';
import { Link } from "react-router-dom";
import FontAwesome from 'react-fontawesome';

const FontAwesomeStyle = {
	color: 'black',
	backgroundColor: '#EE3A43',
	justifyContent: 'center',
	alignItems: 'center'
};

export default class Button extends Component {
	
	constructor() {
		super();
		this.state = {
				buttons: [
					{ 'link' : '/visit', 'name' : 'camera'},
					{ 'link' : '/eat', 'name' : 'cutlery' },
					{ 'link' : '/learn', 'name' : 'graduation-cap' },
					{ 'link' : '/buy', 'name' : 'usd'},
					]
		}
	}
	
	render() {
		
			let links = this.state.buttons.map((button, index) =>
					<Link to={button.link} key={index}>
						<FontAwesome
							className='homeButtons'
							name={button.name}
							size='2x'
							style={FontAwesomeStyle}
						/>
					</Link>
			);
			return (
			<div className="buttons">
				{links}
			</div>
			)
		
	}
}
