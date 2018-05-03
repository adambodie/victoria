import React, { Component } from 'react';

import Banner from '../Banner';
import Buttons from '../Buttons';
import Content from '../Content';



export default class Home extends Component {
  render() {
	return (
		<div>
		<Banner/>
		<Buttons/>
		<Content/>
	</div>
	);
	}
}
