import {ActionType} from './action';
import films from '../mocks/films';

const initialState = {
  genre: `All genres`,
  films,
  visibleFilmsCount: 8
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };

    case ActionType.SET_FILMS:
      return {
        ...state,
        films: action.payload
      };

    case ActionType.INCREASE_VISIBLE_FILMS_COUNT:
      return {
        ...state,
        visibleFilmsCount: state.visibleFilmsCount + action.payload
      };
    case ActionType.RESET_VISIBLE_FILMS_COUNT:
      return {
        ...state,
        visibleFilmsCount: action.payload
      };
    default:
      return state;
  }
};

export {reducer};
