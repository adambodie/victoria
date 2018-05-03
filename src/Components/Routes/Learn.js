import React, { Component } from 'react';
import Banner from '../Banner';
import test from "../../fact.jpg";
export default class Learn extends Component {
  render() {
	return (
		<div>
			<Banner />
			<div className="facts">
				<div className="photo-container">
					<div className="photo slide">
						<img src={test} alt="Did You Know?"/>
						<div className="photo-overlay">
							<h3>Victoria is the capital of the British Columbia Province</h3> 
						</div>
					</div>
				</div>
				<div className="photo-container">
					<div className="photo slide">
						<img src={test} alt="Did You Know?"/>
						<div className="photo-overlay">
							<h3>John Elway was born in Port Angeles</h3> 
						</div>
					</div>
				</div>
				<div className="photo-container">
					<div className="photo slide">
						<img src={test} alt="Did You Know?"/>
						<div className="photo-overlay">
							<h3>Congregation Emanu-El is the oldest Jewish Synagogue in Canada</h3> 
						</div>
					</div>
				</div>
			</div>
		</div>
	);
	}
}
