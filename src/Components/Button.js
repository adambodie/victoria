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
	
	render() {
			return (
			<div className="buttons">
					<Link to='/visit'>
						<FontAwesome
							className='homeButtons'
							name='camera'
							size='2x'
							style={FontAwesomeStyle}
						/>
					</Link>
					<Link to='/eat'>
						<FontAwesome
							className='homeButtons'
							name='cutlery'
							size='2x'
							style={FontAwesomeStyle}
						/>
					</Link>
					<Link to='/learn'>
						<FontAwesome
							className='homeButtons'
							name='graduation-cap'
							size='2x'
							style={FontAwesomeStyle}
						/>
					</Link>
					<Link to='/learn'>
						<FontAwesome
							className='homeButtons'
							name='usd'
							size='2x'
							style={FontAwesomeStyle}
						/>
					</Link> 
				</div>
			)
		
	}
}
