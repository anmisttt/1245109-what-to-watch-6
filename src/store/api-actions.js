import {ActionCreator} from './action';
import getAdaptedFilm from '../services/adapter';

const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then((response) => (response.data.map((film)=>getAdaptedFilm(film))))
    .then((data) => (dispatch(ActionCreator.loadFilms(data))))
);

export {fetchFilmsList};
