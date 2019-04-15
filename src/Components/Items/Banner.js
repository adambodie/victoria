import React from 'react';

const Banner = ({name, alt}) => <div><img src={`https://victoria.bodiewebdesign.com/Images/${name}.jpg`} alt={alt} className='img-fluid'/></div>;

export default Banner;
