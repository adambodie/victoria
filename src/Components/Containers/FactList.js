import React from 'react';
import Fact from '../Items/Fact';
import shuffle from '../shuffle.js';

const FactList = ({ data }) => (
	<div className="facts">
		{shuffle(data).map((x, index) => 
			<div key={index}>
				<Fact name={x}/>
			</div>
			).filter((x, index) => index < 4)
		}
	</div>
);


export default FactList;
