/* eslint-disable max-len */
import { MovieConstants } from '../constants/movieConstants';
import axiosClient from '../../common/apis/axiosClient';
import { apiConfig } from '../../common/apis/apiConfig';

export const getPopularMovies = () => async (dispatch) => {
  try {
    const response = await axiosClient.get(
      `/discover/movie?sort_by=popularity.desc&api_key=${apiConfig}&page=1`,
    );
    dispatch({ type: MovieConstants.GET_MOVIES, payload: response.data.results.slice(0, 10) });
  } catch (error) {
    console.log(error);
  }
};
export const getRatedMovies = () => async (dispatch) => {
  try {
    const response = await axiosClient.get(
      `/movie/top_rated?api_key=${apiConfig}&language=en-US&page=1\``,
    );
    dispatch({
      type: MovieConstants.GET_RATED_MOVIES,
      payload: response.data.results.slice(0, 10),
    });
  } catch (error) {
    console.log(error);
  }
};
export const getTredingTv = () => async (dispatch) => {
  try {
    const response = await axiosClient.get(
      `/tv/popular?api_key=${apiConfig}&language=en-US&page=1`,
    );
    dispatch({ type: MovieConstants.GET_TREDING_TV, payload: response.data.results.slice(0, 10) });
  } catch (error) {
    console.log(error);
  }
};

export const getMovies = (catalog) => async (dispatch) => {
  try {
    const response = await axiosClient.get(
      `/discover/${catalog}?sort_by=popularity.desc&api_key=${apiConfig}&page=1`,
    );
    dispatch({ type: MovieConstants.GET_MOVIES, payload: response.data.results.slice(0, 10) });
  } catch (error) {
    console.log(error);
  }
};
export const SearchMovies = (search) => async (dispatch) => {
  try {
    const response = await axiosClient.get(
      `/search/movie?&api_key=${apiConfig}&query=${search}&page=1`,
    );
    dispatch({ type: MovieConstants.SEARCH_MOVIES, payload: response.data.results.slice(0, 10) });
  } catch (error) {
    console.log(error);
  }
};
