import React, { Component } from 'react';
import shuffle from '../shuffle.js';
import Home from '../Items/Home';
export default class HomeList extends Component {

	render() {
		let results = this.props.data;
		let shuffleArray = shuffle(results);
		let frontPageFeatures = shuffleArray.map((x, index) =>
			<div className="home-container" key={ index }>
				<Home image={x.image} alt={x.alt} title={x.title} text={x.text} />
			</div>
			);
		return(
				<div className="content-parent">
					<div className="content">
						{frontPageFeatures}
					</div>
				</div>
			);
		}
}
