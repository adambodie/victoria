import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Carousel from '../Carousel';

export default class Visit extends Component {
  render() {
	return (
		<div className="visit">
			<Tabs>
				<TabList>
					<Tab>Part 1</Tab>
					<Tab>Part 2</Tab>
				</TabList>
				<TabPanel>
					<h1>Strolling Around Port Angeles Admiring the Artwork</h1>
					<Carousel id={'72157696418888385'} />
				</TabPanel>
				<TabPanel>
					<h1>Part 2</h1>
					<Carousel />
				</TabPanel>
			</Tabs>
		</div>
	);
	}
}
