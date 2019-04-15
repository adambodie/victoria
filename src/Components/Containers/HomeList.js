import React, { Component } from 'react';
import shuffle from '../shuffle.js';
import Home from '../Items/Home';
export default class HomeList extends Component {

	render() {
		const { data } = this.props;
		let shuffleArray = shuffle(data);
		return(
			<div className="content-parent">
				<div className="content">
					{shuffleArray.map((x, index) =>
						<div className="home-container" key={ index }>
							<Home image={x.image} alt={x.alt} title={x.title} text={x.text} />
						</div>
					)}
				</div>
			</div>
		);
	}
}
