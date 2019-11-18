import React from 'react'

const Fact = ({name}) => (
	<div className='view view-transform'>
		<img src={'../assets/fact.jpg'} alt='Did You Know?'/>
		<div className='mask'>
			<h2>{name}</h2> 
		</div>
	</div>
)

export default Fact
