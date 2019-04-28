import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../Components/Items/Home';

it('renders a feature on the home page', () => {
  const tree = renderer.create(<Home image='port-angeles' alt='Port Angeles' title='Port Angeles' text='Visit the Gateway to the Olympic National Park' />).toJSON();
  expect(tree).toMatchSnapshot();
});
