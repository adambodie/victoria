import React, { Component } from 'react';
import '../../Styles/Learn.css';
import FactList from '../Containers/FactList';
import axios from 'axios';
import shuffle from '../shuffle.js';

export default class FactRoute extends Component {
	constructor() {
		super();
		this.state = {
			facts: []
		}
		this.newFacts = this.newFacts.bind(this);
	}
	componentDidMount() {
		axios.get(`https://victoria.bodiewebdesign.com/static/data/facts.json`)
			.then(response => {
				this.setState({
					facts: response.data
				});
			})
			.catch(error => {
				console.log('Error fetching and parsing data');
			});
		}
		newFacts() {
			alert("New Facts have been loaded");
			this.setState({facts: shuffle(this.state.facts)});
		}
	render() {
		const { facts } = this.state;
		return (
			<div>
				<h1 className='pageTitle'>Fun Facts</h1>
				<FactList data={facts} />
				<button className="factButton" onClick={this.newFacts}>More Facts</button>
			</div>
		);
	}
}
