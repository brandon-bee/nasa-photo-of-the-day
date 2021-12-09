import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h3`
  background-color: #5C1A1B;
  color: #AED4E6;
`

const PhotoTitle = props => {
  return (
    <StyledTitle>{props.image.title}</StyledTitle>
  );
}

export default PhotoTitle;