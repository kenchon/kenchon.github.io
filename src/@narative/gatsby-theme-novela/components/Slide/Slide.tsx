import React from 'react';
import styled from '@emotion/styled';

const IFrame = styled.iframe`
    max-width: 780px;
    max-height: 586px;
    min-width: 360px;
    min-height: 270px;
    top: 0;
    width: 70%;
    height: 70%;
    border: 0;
    top: 0;
    left: 0;
`

const IFrameWrapper = styled.div`
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
    <IFrameWrapper>
        <IFrame src={ props.src }>
        </IFrame>
    </IFrameWrapper>
  );
};

export default Slide;
