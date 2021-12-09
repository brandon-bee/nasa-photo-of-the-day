import React from 'react';

const AboutPhoto = props => {
  return (
    <div>
      <p>Date: {props.date}</p>
      <p>{props.explanation}</p>
      <p>Copyright {props.copyright}</p>
    </div>
  );
}

export default AboutPhoto;