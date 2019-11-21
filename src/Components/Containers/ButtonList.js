import React from 'react'
import Button from '../items/Button'

const ButtonList = ({data}) => (
	<div className='buttons'>
		{data.map((x, index) => index !== 0 && (<Button link={x.link} name={x.logo} key={index} />))}
	</div>
)

export default ButtonList
