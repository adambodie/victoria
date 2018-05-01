import React, { Component } from 'react';
import banner from '../banner.jpg';

export default class Banner extends Component {
  render() {
    return (
    	<div>
			<img src={banner} alt="banner" id="banner"/>
			<div className="title">
				<h1>Port Angeles to Victoria</h1>
				<h1>See the Black Ball</h1>
			</div>
		</div>
    )
  }
}
