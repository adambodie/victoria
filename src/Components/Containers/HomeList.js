import React from 'react';
import shuffle from '../shuffle.js';
import Home from '../Items/Home';

const HomeList = ({ data }) =>(
	<div className="content-parent">
		<div className="content">
			{shuffle(data).map((x, index) =>
				<div className="home-container" key={ index }>
					<Home image={x.image} alt={x.alt} title={x.title} text={x.text} />
				</div>
			)}
		</div>
	</div>
);

export default HomeList;
