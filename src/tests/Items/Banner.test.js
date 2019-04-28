import React from 'react';
import renderer from 'react-test-renderer';
import Banner from '../../Components/Items/Banner';

it('renders a banner component', () => {
  const tree = renderer.create(<Banner name="Name" alt="Alt" />).toJSON();
  expect(tree).toMatchSnapshot();
});
