import React, { Component } from 'react';
import Fact from '../Items/Fact';
import shuffle from '../shuffle.js';

export default class FactList extends Component {

	render() {
		const { data } = this.props;
		let shuffledResults = shuffle(data);
		const listOfFacts = shuffledResults.map((x, index) => 
			<div key={index}>
				<Fact name={x}/>
			</div>
			);
		return(
			<div className="facts">
				{listOfFacts.filter((x, index) => index < 4)}
			</div>
			);
		}
}
