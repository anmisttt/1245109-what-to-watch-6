import {NameSpace} from '../root-reducer';

export const getActiveFilmId = (state) => state[NameSpace.FILM].activeFilmId;
