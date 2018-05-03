import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Buttons extends Component {
  render() {
    return (
    	<div className="buttons">
			<div><Link to='/visit'></Link></div>
			<div><Link to='/eat'></Link></div>
			<div><Link to='/learn'></Link></div>
		</div>
    )
  }
}
