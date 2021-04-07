import {NameSpace} from '../root-reducer';

export const getFilms = (state) => state[NameSpace.FILMS].films;
export const getCurrentFilm = (state) => state[NameSpace.FILMS].currentFilm;
export const getComments = (state) => state[NameSpace.FILMS].comments;
export const getStatusDataLoaded = (state) => state[NameSpace.FILMS].isDataLoaded;
export const getStatusCurrentFilmLoaded = (state) => state[NameSpace.FILMS].isCurrentFilmLoaded;
export const getStatusCommentsLoaded = (state) => state[NameSpace.FILMS].isCommentsLoaded;
