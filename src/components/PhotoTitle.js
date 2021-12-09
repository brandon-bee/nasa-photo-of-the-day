import React from 'react';

const PhotoTitle = props => {
  console.log(props);
  return (
    <h3>{props.image.title}</h3>
  );
}

export default PhotoTitle;