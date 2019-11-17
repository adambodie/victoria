import React from 'react';
import Fact from '../Items/Fact';

const FactList = ({ data }) => (
	<div className="facts">
		{data.map((x, index) => 
			<div key={index}>
				<Fact name={x}/>
			</div>
			).filter((x, index) => index < 4)
		}
	</div>
);


export default FactList;
