import React from 'react';

const PhotoTitle = props => {
  console.log(props)
  console.log(props.image.title)
  return (
    <h3>{props.image.title}</h3>
  );
}

export default PhotoTitle;