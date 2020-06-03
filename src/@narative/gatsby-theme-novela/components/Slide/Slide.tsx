import React from 'react';
import styled from '@emotion/styled';

const IFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  max-width:780px;
  max-height: 585px;
  border: 0;
`

const IFrameWrapper = styled.div`
  position: relative;
  display:block;
  margin:0 auto;
  width: 100%;
  max-width:780px;
  max-height: 585px;
  padding-bottom: 75%;
  top: 50%;
  // transform:translateY(-50%)
`

const Slide = ( props ) => {
  return (
    <IFrameWrapper>
        <IFrame src={ props.src } allow={"fullscreen"}>
        </IFrame>
    </IFrameWrapper>
  );
};

export default Slide;
