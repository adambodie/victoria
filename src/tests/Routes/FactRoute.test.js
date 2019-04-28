import React from 'react';
import { shallow } from 'enzyme';
import FactRoute from '../../Components/Routes/FactRoute';


it ('simulates click events', () => {
	const spy = jest.spyOn(FactRoute.prototype, 'newFacts');
	const app = shallow(<FactRoute />);
	//console.log(app.debug());
	app.find('.factButton').simulate('click');
	expect(spy).toHaveBeenCalled();
})
