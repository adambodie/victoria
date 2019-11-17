import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PhotoCarousel from '../Carousels/PhotoCarousel';
import '../../Styles/Tabs.css';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return { pages: state.pages };
};

const PhotoRoute = ({ pages }) => (
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

export default connect(mapStateToProps)(PhotoRoute)
