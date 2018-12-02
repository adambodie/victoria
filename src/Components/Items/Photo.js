import React from 'react';

const Photo = props => (
  <div>
        <img src={`https://s3-us-west-2.amazonaws.com/victoria.bodiewebdesign.com/Images/${props.id}_o.jpg`} alt={props.title}/>
        <h3>{props.title}</h3>
  </div>
);

export default Photo;
