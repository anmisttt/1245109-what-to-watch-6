import {ActionType} from './action';

const initialState = {
  genre: `All genres`,
  films: [],
  visibleFilmsCount: 8,
  isDataLoaded: false,
  authorizationStatus: false
};

const reducer = (state = initialState, action) => {
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
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        isDataLoaded: true
      };
    case ActionType.CHECK_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    default:
      return state;
  }
};

export {reducer};
