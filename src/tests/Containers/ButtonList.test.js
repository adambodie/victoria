import React from 'react';
import { shallow } from 'enzyme';
import ButtonList from '../../Components/Containers/ButtonList';
import Button from '../../Components/Items/Button';

describe('ButtonList', () => {
  const buttons = [{ "link": "eat", "name": "Victoria" }, 
				 { "link": "buy", "name": "Port Angeles" },
				 { "link": "visit", "name": "Bremerton" }
				];
  it('renders 3 buttons', () => {
    const wrapper = shallow(<ButtonList data={buttons} />);
    expect(wrapper.find(Button).length).toBe(buttons.length);
    //console.log(wrapper.debug());
  });
});
