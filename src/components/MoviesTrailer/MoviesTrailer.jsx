/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import '../slider/Slider.scss';

const MoviesTrailer = () => {
  return (
    <div className="movieTrailer">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/JfVOs4VSpmA"
        frameBorder="0"
        allowFullScreen
      >
      </iframe>
    </div>
  );
};

export default MoviesTrailer;
