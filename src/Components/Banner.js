import React from 'react';

const Banner = props => <div><img src={require(`../Images/${props.name}.jpg`)} alt={props.name} className='img-fluid'/></div>;

export default Banner;
