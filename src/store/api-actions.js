import {loadFilms, loadCurrentFilm, loadPromoFilm, redirectToRoute, loadComments, changeAuthorization} from './action';
import getAdaptedFilm from '../services/adapter';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then((response) => (response.data.map((film)=>getAdaptedFilm(film))))
    .then((data) => (dispatch(loadFilms(data))))
    .catch(() => {})
);

export const fetchCurrentFilm = (filmId) => (dispatch, _getState, api) => (
  api.get(`/films/${filmId}`)
  .then((response) => getAdaptedFilm(response.data))
  .then((data) => (dispatch(loadCurrentFilm(data))))
  .catch(() => dispatch(redirectToRoute(`/404`)))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
  .then((response) => getAdaptedFilm(response.data))
  .then((data) => (dispatch(loadPromoFilm(data))))
  .catch(() => {})
);

export const fetchComments = (filmId) => (dispatch, _getState, api) => (
  api.get(`/comments/${filmId}`)
  .then((response) => response.data)
  .then((data) => (dispatch(loadComments(data))))
  .catch(() => {})
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
  .then(() => dispatch(changeAuthorization(true)))
  .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(changeAuthorization(true)))
    .then(() => dispatch(redirectToRoute(`/`)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
  .then(() => dispatch(changeAuthorization(false)))
  .catch(() => {})
);

export const postComment = ({rating, comment}, filmId) => (dispatch, _getState, api) => (
  api.post(`comments/${filmId}`, {rating, comment})
  .then(() => dispatch(redirectToRoute(`/films/${filmId}`)))
);

