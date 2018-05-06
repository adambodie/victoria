import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Carousel from '../Carousel';


export default class Visit extends Component {

	render() {
	const pages = [
		{'title': 'Welcome to Port Angeles', 'id': '72157696418888385'}, 
		{'title': 'Port Angeles Before the Ferry Ride', 'id': '72157694709551771'}, 
		{'title': 'On the MV Coho, Ready to Go to Canada', 'id': '72157668611695008'}, 
		{'title': 'Strait of Juan de Fuca', 'id': '72157696454965535'}, 
		{'title': 'Juan de Fuca Strait', 'id': '72157668611747978'}, 
		{'title': 'Entering Victoria on a Perfect Day', 'id': '72157693320413152'}, 
		{'title': 'Exploring the Diversity of Victoria', 'id': '72157693320611782'}, 
		{'title': 'Beacon Hill Park: The Gem of The Garden City', 'id': '72157695791790824'}, 
		{'title': 'Walking Along the Canadian Coast', 'id': '72157693320674062'}, 
		{'title': 'Back in the Harbour to Explore', 'id': '72157695791865414'}, 
		{'title': 'Back on the Ferry: Back to the States', 'id': '72157696455367255'}, 
		{'title': 'Sequim, Blyn and the Hood Canal Bridge Closure', 'id': '72157668612116848'}, 
		{'title': 'One Last Unplanned Hurrah in Bremerton', 'id': '72157666572287647'}
		];
	let tabs = pages.map((page, index) => 
		<TabPanel key={index}>
			<h1 className="tabTitle">{page.title}</h1>
			<Carousel id={page.id} />
		</TabPanel>
	);
	let lists = pages.map((page, index) =>
			<Tab key={index}>Part {index + 1}</Tab>
	);		
	return (
		<div className="visit">
			<Tabs>
				<TabList>
					{lists}
				</TabList>
				{tabs}
			</Tabs>
		</div>
	);
	}
}
