import React from 'react';
import styled from '@emotion/styled';

const IFrame = styled.iframe`
    max-width: 507px;
    max-height: 586px;
    top: 0;
    width: 55%;
    height: 55%;
    // position: relative;
    // text-align: center;
    border: 0;
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
    margin-bottom: -250px;
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
