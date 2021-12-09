import React from 'react';

const AboutPhoto = props => {
  return (
    <div>
      <p>Date: {props.image.date}</p>
      <p>{props.image.explanation}</p>
      <p>Copyright {props.image.copyright}</p>
    </div>
  );
}

export default AboutPhoto;