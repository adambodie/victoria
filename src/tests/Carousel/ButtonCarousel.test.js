import React from 'react';
import renderer from 'react-test-renderer';
import { Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import ButtonCarousel from '../../Components/Carousels/ButtonCarousel';

it('renders multiple buttons', () => {
	const buttons = [
					{ 'link' : '/visit', 'name' : 'camera'},
					{ 'link' : '/eat', 'name' : 'cutlery' },
					{ 'link' : '/learn', 'name' : 'graduation-cap' },
					{ 'link' : '/buy', 'name' : 'usd'},
				];
	const tree = renderer.create(<MemoryRouter><ButtonCarousel data={buttons}/></MemoryRouter>).toJSON();
	expect(tree).toMatchSnapshot();
});
