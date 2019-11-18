import React, { Component } from 'react'
import axios from 'axios'
import '../../styles/Buy.css'
import CAD from '../items/CAD'
import USD from '../items/USD'

export default class BuyRoute extends Component {
	constructor() {
		super()
		this.state = {
			rate: '',
			value: '',
			canadianValue: '',
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChange(value) {
		this.setState({value: value})
	}
	handleSubmit() {
		const { value, rate } = this.state
		const regex = /^[+-]?(\d*\.)?\d+$/
		if (regex.test(value)) {
			this.setState({canadianValue: '$' + (value * rate).toFixed(2)})
		} else {
			this.setState({canadianValue: 'Please enter a numerical value'})
		}
	}
	componentDidMount() {
		axios.get('https://openexchangerates.org/api/latest.json?app_id=032ca3c4ffbb46378faefd64ec6892cb')
			.then(response => {
				this.setState({rate: response.data.rates.CAD})
			})
			.catch(error => {
				console.log('Error fetching and parsing data')
			})
		}
	render() {
		const { rate, value, canadianValue } = this.state
		return (
			<div>
				<h1 className='currency'>Currency Exchange Rate</h1>
				<h6>USD to CAD Exchange rate: {rate}</h6>
				<div className='currencyRates'>
					<USD value={value} onHandleChange={this.handleChange} onHandleSubmit={this.handleSubmit} />
					<CAD canadianValue={canadianValue} />
				</div>
			</div>
			)
		}
}
