import {NameSpace} from '../root-reducer';

export const getGenre = (state) => state[NameSpace.FILMS].genre;
export const getVisibleFilmsCount = (state) => state[NameSpace.FILMS].visibleFilmsCount;
export const getActiveFilmId = (state) => state[NameSpace.FILMS].activeFilmId;
