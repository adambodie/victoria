import React from 'react';
import renderer from 'react-test-renderer';
import Restaurant from '../../Components/Items/Restaurant';

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
