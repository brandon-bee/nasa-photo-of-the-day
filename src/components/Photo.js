import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  
`

const Photo = props => {
  return (
    <>
      <StyledImg src={props.image.url} alt='NASA Pic of the Day' />
    </>
  );
}

export default Photo;