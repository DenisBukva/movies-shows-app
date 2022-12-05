import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import banner from '../../assets/footer-bg.jpg';
import { MovieGrid, Search } from '../../components';
import '../../components/movieGrid/MovieGrid.scss';

const MovieOrShow = () => {
  const [value, setValue] = useState('');
  const { catalog } = useParams();
  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="movies">
      <div
        className="movies-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
      </div>
      <Search input={inputHandler} />
      <MovieGrid catalog={catalog} value={value} />
    </div>
  );
};
export default MovieOrShow;
