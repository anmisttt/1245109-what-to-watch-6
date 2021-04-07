import {combineReducers} from 'redux';
import {user} from './user/user';
import {data} from './data/data';
import {films} from './films/films';
import {film} from './film/film';

export const NameSpace = {
  USER: `USER`,
  DATA: `DATA`,
  FILMS: `FILMS`,
  FILM: `FILM`
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.FILMS]: films,
  [NameSpace.FILM]: film,
  [NameSpace.USER]: user,
});
