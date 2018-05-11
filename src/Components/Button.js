import React, { Component } from 'react';
import { Link } from "react-router-dom";
import FontAwesome from 'react-fontawesome';

const FontAwesomeStyle = {
	color: 'black',
	backgroundColor: '#EE3A43',
	padding: '20px',
	borderRadius: '100%',
};

export default class Button extends Component {
	
	render() {
			return (
			<div className="buttons">
					<Link to='/visit'><FontAwesome
					className='super-crazy-colors'
					name='camera'
					size='3x'
					style={FontAwesomeStyle}
				  /></Link>
					<Link to='/eat'><FontAwesome
					className='super-crazy-colors'
					name='coffee'
					size='3x'
					style={FontAwesomeStyle}
				  /></Link>
					<Link to='/learn'><FontAwesome
					className='super-crazy-colors'
					name='graduation-cap'
					size='3x'
					style={FontAwesomeStyle}
				  /></Link>
				</div>
			)
		
	}
}
