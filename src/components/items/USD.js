import React, { Component } from 'react'

export default class USD extends Component {
	constructor(props){
		super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}
    handleChange(e) {
        this.props.onHandleChange(e.target.value)
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.onHandleSubmit(e.target.value)
    }
	render() {
        const { value } = this.props;
        return(
        <div className='currencyColumn'>
            <h2>United States Dollars</h2>
            <div className='usd'>
                <form className='results' onSubmit={this.handleSubmit}>
                    <input className='currencyValue' type='text' value={value} onChange={this.handleChange} /><br/>
                    <input className='currencySubmit' type='submit' value='Submit' />
                </form>
            </div>
        </div>
        )
	}
}


