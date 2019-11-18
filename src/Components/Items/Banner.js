import React from 'react'

const Banner = ({name, alt}) => <img src={`../assets/${name}.jpg`} alt={alt} className='img-fluid'/>

export default Banner
