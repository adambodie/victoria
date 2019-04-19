import React from 'react';
import renderer from 'react-test-renderer';
import { Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import BannerCarousel from '../Components/Carousels/BannerCarousel';

// slider undefined

it('renders multiple banners', () => {
	const banners = [{'name': 'coast-banner', 'alt' : 'Coastline'},{'name': 'harbour-banner', 'alt' : 'Inner Harbour'}, {'name': 'parliament-banner', 'alt' : 'British Columbia Parliament Buildings'}, {'name': 'port-angeles-banner', 'alt' : 'Port Angeles'}];
	const tree = renderer.create(<BannerCarousel data={banners}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
