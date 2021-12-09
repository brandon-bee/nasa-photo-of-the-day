import React from 'react';

const Photo = props => {
  return (
    <div>
      <img src={props.image.url} alt='NASA Pic of the Day' />
    </div>
  );
}

export default Photo;