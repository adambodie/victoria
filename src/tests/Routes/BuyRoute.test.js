import React from 'react';
import { shallow } from 'enzyme';
import BuyRoute from '../../Components/Routes/BuyRoute';


it ('simulates value update', () => {
	const spy = jest.spyOn(BuyRoute.prototype, 'handleChange');
	const app = shallow(<BuyRoute />);
	//console.log(app.debug());
	app.find('.currencyValue').simulate('change', { target: { value: "10" } });
	expect(spy).toHaveBeenCalled();
})
