import { combineReducers } from 'redux';
import {
  moviesReducer,
  RatedMoviesReducer,
  TredingTvReducer,
} from './movieReducer';

const rootReducer = combineReducers({
  Popularmovies: moviesReducer,
  RatedMovies: RatedMoviesReducer,
  TradingTv: TredingTvReducer,
});

export default rootReducer;
