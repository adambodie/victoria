import React from 'react';
import { shallow, mount, render } from 'enzyme';
import FactList from '../../Components/Containers/FactList';
import Fact from '../../Components/Items/Fact';


describe('FactList', () => {
  const facts = ["Hall of Fame Football player John Elway was born in Port Angeles", 
				"Congregation Emanu-El is the oldest Jewish Synagogue in Canada",
				"The population of Port Angeles is about 19,500"];
  it('renders 3 facts', () => {
    const wrapper = shallow(<FactList data={facts} />);
    expect(wrapper.find(Fact).length).toBe(facts.length);
    //console.log(wrapper.debug());
  });
});
