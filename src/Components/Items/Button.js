import React from 'react';
import { Link } from "react-router-dom";
import FontAwesome from 'react-fontawesome';

const FontAwesomeStyle = {
	color: 'black',
	backgroundColor: '#EE3A43',
	justifyContent: 'center',
	alignItems: 'center'
};

const Button = props => (
		<Link to={props.link}>
			<FontAwesome
				className='homeButtons'
				name={props.name}
				size='2x'
				style={FontAwesomeStyle}
			/>
		</Link>
);

export default Button;
