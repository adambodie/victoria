import React from 'react';

const Banner = props => <div><img src={`https://s3-us-west-2.amazonaws.com/victoria.bodiewebdesign.com/Images/${props.name}.jpg`} alt={props.name} className='img-fluid'/></div>;

export default Banner;
