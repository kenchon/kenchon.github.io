import React from 'react';

const Slide = ( props ) => {
  return (
    <div>
        <iframe src={props.src}>
        </iframe>
    </div>
  );
};

export default Slide;
