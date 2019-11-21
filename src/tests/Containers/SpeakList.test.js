import React from 'react';
import { shallow } from 'enzyme';
import SpeakList from '../../Components/Containers/SpeakList';

describe('keyboard updating', () => {
	const spy = jest.spyOn(SpeakList.prototype, 'handleChange');
	const app = shallow(<SpeakList buttons={[
				"ʔ", "a", "c", "c̕", "č", "č̕","e", "ə", "h", "i", "k", "kʷ", "k̕ʷ", "l", 
				"ɬ", "ƛ̕", "m", "m̕", "n", "n̕", "ŋ", "ŋ̕","p", "p̕", "q", "q̕", "qʷ", "q̕ʷ", 
				"s", "š", "t", "t̕", "u", "w", "w̕", "xʷ", "x̣", "x̣ʷ", "y", "y̕", 
				"?", ".", ",", "!", "'", "\"", "Delete", "Clear", "Space"
				]}/>);
	it('should update text', () => {
		const form = app.find('form');
		app.find('.button-1').simulate('click', { target: { value: "a" } });
		form.simulate('submit', {
			preventDefault: () => {},
			target: [{value: 'a'}],
		});
		expect(app.find('.keyboard-enter').text()).toBe('a');
		app.find('.button-48').simulate('click', { target: { value: "Space" } });
		form.simulate('submit', {
			preventDefault: () => {},
			target: [{value: 'Space'}],
		});
		expect(app.find('.keyboard-enter').text()).toBe('a ');
		app.find('.button-46').simulate('click', { target: { value: "Delete" } });
		form.simulate('submit', {
			preventDefault: () => {},
			target: [{value: 'Delete'}],
		});
		expect(app.find('.keyboard-enter').text()).toBe('a');
		app.find('.button-47').simulate('click', { target: { value: "Clear" } });
        form.simulate('submit', {
			preventDefault: () => {},
			target: [{value: 'Clear'}],
		});
		expect(app.find('.keyboard-enter').text()).toBe('');
	});
});

