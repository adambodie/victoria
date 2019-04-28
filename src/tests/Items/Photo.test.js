import React from 'react';
import renderer from 'react-test-renderer';
import Photo from '../../Components/Items/Photo';

it('renders a fact', () => {
  const tree = renderer.create(<Photo id="25" title="Victoria"/>).toJSON();
  expect(tree).toMatchSnapshot();
});
