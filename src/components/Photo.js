import React from 'react';

const Photo = props => {
  return (
    <div>
      <img src={props.url} alt='NASA Pic of the Day' />
    </div>
  );
}

export default Photo;