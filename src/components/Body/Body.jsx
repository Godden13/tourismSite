import './Body.css';
import React from 'react';
import { PropTypes } from 'prop-types';

function CarouselBody({ smallText, text }) {
  return (
    <div className="BodyContainer">
      <h3>{smallText} </h3>
      <h1>{text}</h1>
    </div>
  );
}

CarouselBody.propTypes = {
  smallText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CarouselBody;
