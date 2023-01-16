import './PackageHero.css';
import React from 'react';
import { PropTypes } from 'prop-types';

export default function PackageHero({ smallText, text, title }) {
  return (
    <div className="packageHero__container">
      <h1>{smallText}</h1>
      <div className="PackageHero__buttons">
        <h4>{text}</h4>
        <h4 id="Packageorange">{title}</h4>
      </div>
    </div>
  );
}

PackageHero.propTypes = {
  smallText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
