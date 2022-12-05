/* eslint-disable default-param-last */
import { MovieConstants } from '../constants/movieConstants';

const initialstate = {
  movies: [],
};

export const moviesReducer = (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case MovieConstants.GET_MOVIES: {
      return {
        ...state,
        movies: payload,
      };
    }
    case MovieConstants.SEARCH_MOVIES: {
      return {
        ...state,
        movies: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const RatedMoviesReducer = (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case MovieConstants.GET_RATED_MOVIES: {
      return {
        ...state,
        movies: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const TredingTvReducer = (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case MovieConstants.GET_TREDING_TV: {
      return {
        ...state,
        movies: payload,
      };
    }
    default: {
      return state;
    }
  }
};
