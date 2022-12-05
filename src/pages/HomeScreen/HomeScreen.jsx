import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Slider, Outline, MovieList } from '../../components';
import {
  getPopularMovies,
  getRatedMovies,
  getTredingTv,
} from '../../redux/actions/movieactions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state);

  useEffect(() => {
    dispatch(getPopularMovies());
    dispatch(getRatedMovies());
    dispatch(getTredingTv());
  }, [dispatch]);
  return (
    <div className="Home">
      <Slider />
      <div className="conteiner">
        <div className="section">
          <div className="section__header">
            <h4>Trending TV-Shows</h4>
            <Link to="/tv">
              <Outline className="small">View More</Outline>
            </Link>
          </div>
          <MovieList catalog="tv" data={movies.TradingTv} />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
