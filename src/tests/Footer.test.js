import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Footer from '../Components/Footer';

describe('Footer', () => {
	const wrapper = mount(<Footer />);
	it('should mount in a full DOM', () => {
		expect(wrapper.length).toBe(1);
	}); 
	it('should return the current year', () => {
		const year = new Date().getFullYear();
		expect(wrapper.find('p').text()).toContain(year);
	});
	//console.log(wrapper.debug());
});
