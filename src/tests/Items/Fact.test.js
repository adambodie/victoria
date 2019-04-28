import React from 'react';
import renderer from 'react-test-renderer';
import Fact from '../../Components/Items/Fact';

it('renders a fact', () => {
  const tree = renderer.create(<Fact name="Hall of Fame Football player John Elway was born in Port Angeles"/>).toJSON();
  expect(tree).toMatchSnapshot();
});

