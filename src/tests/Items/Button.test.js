import React from 'react';
import renderer from 'react-test-renderer';
import { Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import Button from '../../Components/Items/Button';

it('renders correct button', () => {
	const tree = renderer.create(<MemoryRouter><Button link="/visit" name="camera"/></MemoryRouter>).toJSON();
	expect(tree).toMatchSnapshot();
});

