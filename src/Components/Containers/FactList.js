import React, { Component } from 'react';
import Fact from '../Items/Fact';
import shuffle from '../shuffle.js';

export default class FactList extends Component {

	render() {
		let results = this.props.data;
		let shuffledResults = shuffle(results);
		const listOfFacts = shuffledResults.map((x, index) => 
			<div key={index}>
				<Fact name={x}/>
			</div>
			);
		const randomFacts = listOfFacts.filter((x, index) => index < 4); 
		return(
			<div className="facts">
				{randomFacts}
			</div>
			);
		}
}
