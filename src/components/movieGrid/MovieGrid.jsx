/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, SearchMovies } from '../../redux/actions/movieactions';
import { MovieItem } from '..';
import './MovieGrid.scss';

const MovieGrid = (catalog) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SearchMovies(catalog.value));
  }, [catalog.value, dispatch]);

  const item = useSelector((state) => state.Popularmovies.movies);

  useEffect(() => {
    dispatch(getMovies(catalog.catalog));
    window.scroll(0, 0);
  }, [catalog.catalog, dispatch]);

  return (
    <>
      <div className="movies__Wrapper">
        <div className="movies__header">
          {catalog.catalog === 'movie' ? <h2>Movies</h2> : <h2>Tv Series</h2>}
        </div>
        <div className="movies__conteiner">
          {item.map((movie) => (
            <MovieItem item={movie} key={movie.id} catalog={catalog.catalog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieGrid;
