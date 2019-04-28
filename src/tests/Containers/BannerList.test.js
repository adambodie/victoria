import React from 'react';
import { shallow } from 'enzyme';
import BannerList from '../../Components/Containers/BannerList';
import Banner from '../../Components/Items/Banner';

describe('BannerList', () => {
  const banners = [{ "name": "Victoria", "alt": "Victoria" }, 
				 { "name": "Port Angeles", "alt": "Port Angeles" },
				 { "name": "Bremerton", "alt": "Bremerton" }
				];
  it('renders 3 Banners', () => {
    const wrapper = shallow(<BannerList data={banners} />);
    expect(wrapper.find(Banner).length).toBe(banners.length);
    //console.log(wrapper.debug());
  });
});
