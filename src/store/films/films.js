import {ActionType} from '../action';

const initialState = {
  genre: `All genres`,
  activeFilmId: 0,
  visibleFilmsCount: 8,
};

const films = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
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
    case ActionType.CHANGE_ACTIVE_FILM:
      return {
        ...state,
        activeFilmId: action.payload
      };
    default:
      return state;
  }
};

export {films};
