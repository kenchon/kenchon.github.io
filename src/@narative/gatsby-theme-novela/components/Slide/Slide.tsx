import React from 'react';
import styled from '@emotion/styled';

const IFrame = styled.iframe`
    max-width: 780px;
    max-height: 586px;
    top: 0;
    width: 70%;
    height: 70%;
    // position: relative;
    // text-align: center;
    border: 0;
    top: 0;
    left: 0;

`

const Frame = styled.div`
    width: 100%;
    max-height: 586px;
    // left: auto;
    // margin: auto;
    height: 0;
    // position: relative;
    padding-bottom: 74.9296%;
    text-align: center;
    // margin-bottom: -250px;
    
`

const Slide = ( props ) => {
  return (
    <Frame>
        <IFrame src={props.src}>
        </IFrame>
    </Frame>
  );
};

export default Slide;
