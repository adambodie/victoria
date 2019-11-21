import React from 'react';
import renderer from 'react-test-renderer';
import Restaurant from '../../Components/Items/Restaurant';

it('renders a restaurant component', () => {
	const tree = renderer.create(
					<Restaurant 
						title="Restaurant Name" 
						image="restaurant image"
						address={["123 Fake Street", "Springfield, USA"]}
						paragraph={["One paragraph", "Two paragraph", "Three paragraph"]}
						/>
						).toJSON();
	expect(tree).toMatchSnapshot();
});
