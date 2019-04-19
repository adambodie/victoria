import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Header from '../Components/Header';

describe('Header', () => {
	const wrapper = mount(<MemoryRouter><Header /></MemoryRouter>);
	it('should mount in a full DOM', () => {
		expect(wrapper.length).toBe(1);
	});
	it('should have five links in navbar-nav', () => {
		expect(wrapper.find('.navbar-nav').children().length).toBe(5);
	}); 
	//console.log(wrapper.debug());
});
