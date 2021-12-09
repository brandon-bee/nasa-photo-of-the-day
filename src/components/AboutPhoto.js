import React from 'react';
import styled from 'styled-components';

const StyledDate = styled.p`
  color: #AED4E6;
`

const StyledExplanation = styled.p`
  color: #1AC8ED;
`

const StyledCopyright = styled.p`
  color: #AED4E6;
`

const AboutPhoto = props => {
  return (
    <>
      <StyledDate>Date: {props.image.date}</StyledDate>
      <StyledExplanation>{props.image.explanation}</StyledExplanation>
      <StyledCopyright>Copyright {props.image.copyright}</StyledCopyright>
    </>
  );
}

export default AboutPhoto;