import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PhotoCarousel from '../Carousels/PhotoCarousel';
import '../../Styles/Tabs.css';
export default class PhotoRoute extends Component {

	render() {
	const pages = [
		{'title': 'Welcome to Port Angeles', 'begin': 0, 'end': 25}, 
		{'title': 'Port Angeles Before the Ferry Ride', 'begin': 26, 'end': 40}, 
		{'title': 'On the MV Coho, Ready to Go to Canada', 'begin': 41, 'end': 49}, 
		{'title': 'Strait of Juan de Fuca', 'begin': 50, 'end': 63}, 
		{'title': 'Juan de Fuca Strait', 'begin': 64, 'end': 87}, 
		{'title': 'Entering Victoria on a Perfect Day', 'begin': 88, 'end': 131}, 
		{'title': 'Exploring the Diversity of Victoria', 'begin': 132, 'end': 160}, 
		{'title': 'Beacon Hill Park: The Gem of The Garden City', 'begin': 161, 'end': 195}, 
		{'title': 'Walking Along the Canadian Coast', 'begin': 196, 'end': 205}, 
		{'title': 'Back in the Harbour to Explore', 'begin': 206, 'end': 239}, 
		{'title': 'Back on the Ferry: Back to the States', 'begin': 240, 'end': 268}, 
		{'title': 'Sequim, Blyn and the Hood Canal Bridge Closure', 'begin': 269, 'end': 287}, 
		{'title': 'One Last Unplanned Hurrah in Bremerton', 'begin': 288, 'end': 302}
		];
	return (
		<div className="visit">
			<Tabs>
				<TabList>
					{pages.map((page, index) => <Tab key={index}>Part {index + 1}</Tab>)}
				</TabList>
				{pages.map((page, index) => 
					<TabPanel key={index}>
						<h1 className="tabTitle">{page.title}</h1>
						<PhotoCarousel begin={page.begin} end={page.end} />
					</TabPanel>
				)}
			</Tabs>
		</div>
	);
	}
}
