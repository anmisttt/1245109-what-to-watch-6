import {NameSpace} from '../root-reducer';
import {createSelector} from 'reselect';
import {getGenre} from '../films/selectors';

export const getFilms = (state) => state[NameSpace.DATA].films;
const visibleFilmsSelector = createSelector(
    getFilms,
    getGenre,
    (films, genre) =>
      (genre === `All genres`) ? films : films.filter((film)=> film.genre === genre));

export const getVisibleFilms = (state) => visibleFilmsSelector(state);
export const getCurrentFilm = (state) => state[NameSpace.DATA].currentFilm;
export const getPromoFilm = (state) => state[NameSpace.DATA].promoFilm;
export const getComments = (state) => state[NameSpace.DATA].comments;
export const getStatusDataLoaded = (state) => state[NameSpace.DATA].isDataLoaded;
export const getStatusCurrentFilmLoaded = (state) => state[NameSpace.DATA].isCurrentFilmLoaded;
export const getStatusPromoFilmLoaded = (state) => state[NameSpace.DATA].isPromoFilmLoaded;
export const getStatusCommentsLoaded = (state) => state[NameSpace.DATA].isCommentsLoaded;
