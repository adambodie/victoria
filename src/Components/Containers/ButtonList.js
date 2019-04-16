import React from 'react';
import Button from '../Items/Button';

const ButtonList = ({data}) => (
	<div className="buttons">
		{data.map((x, index) =>
			<div key={index}>
				<Button link={x.link} name={x.name} />
			</div>
		)}
	</div>
);


export default ButtonList;
