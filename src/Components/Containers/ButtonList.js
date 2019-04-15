import React, { Component } from 'react';
import Button from '../Items/Button';

export default class ButtonList extends Component {
	render() {
		const { data } = this.props;
		return (
			<div className="buttons">
				{data.map((x, index) =>
					<div key={index}>
						<Button link={x.link} name={x.name} />
					</div>
				)}
			</div>
		);
	}
}
