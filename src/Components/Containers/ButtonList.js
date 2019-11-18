import React from 'react';
import Button from '../items/Button';

const ButtonList = ({data}) => (
	<div className="buttons">
		{data.map((x, index) =>
			index !== 0 && (
			<div key={index}>
				<Button link={x.link} name={x.logo} />
			</div>)
		)}
	</div>
);


export default ButtonList;
