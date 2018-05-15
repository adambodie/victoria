import React, { Component } from 'react';
import axios from 'axios';
import '../../Styles/Buy.css';

export default class BuyRoute extends Component {
	
	  constructor(props) {
		super(props);
			this.state = {
				currency: '',
				value: '',
				canadianValue: '',
			};
			this.handleChange = this.handleChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
		}
	  handleChange(event) {
		this.setState({value: event.target.value});
	  }

	  handleSubmit(event) {
		  this.setState({canadianValue: '$' + (this.state.value * this.state.currency).toFixed(2)});
          event.preventDefault();
	  }
    componentDidMount() {
      axios.get('https://openexchangerates.org/api/latest.json?app_id=032ca3c4ffbb46378faefd64ec6892cb')
        .then(response => {
          this.setState({
            currency: response.data.rates.CAD
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing Photographs data', error);
        });
    }

		
		render() {
			return (
				<div>
					<h1 className="currency">Currency Exchange Rate</h1>
					<h6>USD to CAD Exchange rate: {this.state.currency}</h6>
					<div className="currencyRates">
						<div className="usd">
							<h2>United States Dollars</h2>
							<form className="results" onSubmit={this.handleSubmit}>
								<input type="text" value={this.state.value} onChange={this.handleChange} /><br/>
								<input type="submit" value="Submit" />
							</form>
						</div>
						<div className="cad">
							<h2>Canadian Dollars</h2>
							<div className="results">
								<h3>{this.state.canadianValue}</h3>
							</div>
						</div>
					</div>
				</div>
			)
		}
}
