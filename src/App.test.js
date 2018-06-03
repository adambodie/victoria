import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router';

import { shallow, mount, render } from 'enzyme';
import axios from 'axios';

import App from './App';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Button from './Components/Items/Button';
import Fact from './Components/Items/Fact';
import Home from './Components/Items/Home';
import Photo from './Components/Items/Photo';
import Restaurant from './Components/Items/Restaurant';
import Banner from './Components/Items/Banner';

import BannerCarousel from './Components/Carousels/BannerCarousel';
import ButtonCarousel from './Components/Carousels/ButtonCarousel';
import PhotoCarousel from './Components/Carousels/PhotoCarousel';

import BuyRoute from './Components/Routes/BuyRoute';
import FactList from './Components/Containers/FactList';

import formUrl from './Components/formUrl';
import shuffle from './Components/shuffle';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//Snapshot Testing
describe('Snapshots', () => {
it('renders correct button', () => {
  const tree = renderer.create(<MemoryRouter><Button link="/visit" name="camera"/></MemoryRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
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

it('renders multiple banners', () => {
	const banners = [{'name': 'coast-banner', 'alt' : 'Coastline'},{'name': 'harbour-banner', 'alt' : 'Inner Harbour'}, {'name': 'parliament-banner', 'alt' : 'British Columbia Parliament Buildings'}, {'name': 'port-angeles-banner', 'alt' : 'Port Angeles'}];
	const tree = renderer.create(<BannerCarousel data={banners}/>).toJSON();
  expect(tree).toMatchSnapshot();
});



it('renders correct url', () => {
  const tree = renderer.create(formUrl('135847282452394', '25')).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a fact', () => {
  const tree = renderer.create(<Fact name="Hall of Fame Football player John Elway was born in Port Angeles"/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a photo', () => {
  const tree = renderer.create(<Photo farm="abc" server="def" id="ghi" secret="jklm" title="Test picture" tags="tests" index='2' length='50'/>).toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders a feature on the home page', () => {
  const tree = renderer.create(<Home image='port-angeles' alt='Port Angeles' title='Port Angeles' text='Visit the Gateway to the Olympic National Park' />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a restaurant component', () => {
  const tree = renderer.create(<Restaurant 
						title="Restaurant Name" 
						image="restaurant image"
						addressOne="123 Fake Street" 
						addressTwo="Springfield, USA"
						paragraphOne="One paragraph"
						paragraphTwo="Two paragraph"
						paragraphThree="Three paragraph"
						/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a banner component', () => {
  const tree = renderer.create(<Banner name="Name" alt="Alt" />).toJSON();
  expect(tree).toMatchSnapshot();
});
});

test('shuffled array is not the same', () => {
	const array = [1,2,3,4];
	expect(shuffle(array)).not.toBe([1,2,3,4]);
});

// Enzyme Tests
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


describe('Regex', () => {
	const regex = /^[+-]?(\d*\.)?\d+$/;
	test('it should match if it has only numbers and decimal points', () => {
	  expect('abc').not.toMatch(regex);
	  expect('abc123').not.toMatch(regex);
	  expect('abc.2').not.toMatch(regex);
	  expect('123').toMatch(regex);
	  expect('12.3').toMatch(regex);
	});
});

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
