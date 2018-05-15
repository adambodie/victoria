import React, { Component } from 'react';
import Button from '../Items/Button';

export default class ButtonList extends Component {

	render() {
		let results = this.props.data;
		let links = results.map((x, index) =>
			<div key={index}>
				<Button link={x.link} name={x.name} />
			</div>
			);  
		return (
			<div className="buttons">
				{links}
			</div>
		);
	}
}
