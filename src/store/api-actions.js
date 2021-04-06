import {ActionCreator} from './action';
import getAdaptedFilm from '../services/adapter';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then((response) => (response.data.map((film)=>getAdaptedFilm(film))))
    .then((data) => (dispatch(ActionCreator.loadFilms(data))))
    .catch(() => {})
);

export const fetchFilm = (filmId) => (dispatch, _getState, api) => (
  api.get(`/films/${filmId}`)
  .then((response) => getAdaptedFilm(response.data))
  .then((data) => (dispatch(ActionCreator.loadFilm(data))))
  .catch(() => dispatch(ActionCreator.redirectToRoute(`/404`)))
);

export const fetchComments = (filmId) => (dispatch, _getState, api) => (
  api.get(`/comments/${filmId}`)
  .then((response) => response.data)
  .then((data) => (dispatch(ActionCreator.loadComments(data))))
  .catch(() => {})
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
  .then(() => dispatch(ActionCreator.changeAuthorization(true)))
  .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.changeAuthorization(true)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
  .then(() => dispatch(ActionCreator.changeAuthorization(false)))
  .catch(() => {})
);

export const postComment = ({rating, comment}, filmId) => (dispatch, _getState, api) => (
  api.post(`comments/${filmId}`, {rating, comment})
  .then(() => dispatch(ActionCreator.redirectToRoute(`/films/${filmId}`)))
);
