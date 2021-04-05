import {ActionCreator} from './action';
import getAdaptedFilm from '../services/adapter';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then((response) => (response.data.map((film)=>getAdaptedFilm(film))))
    .then((data) => (dispatch(ActionCreator.loadFilms(data))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
  .then(() => dispatch(ActionCreator.changeAuthorization(true)))
  .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.changeAuthorization(true)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
  .then(() => dispatch(ActionCreator.changeAuthorization(false)))
  .catch(() => {})
);
