import {ActionType} from './action';

const initialState = {
  genre: `All genres`,
  films: [],
  comments: [],
  currentFilm: {},
  activeFilmId: 0,
  visibleFilmsCount: 8,
  isDataLoaded: false,
  authorizationStatus: false,
  isCurrentFilmLoaded: false,
  isCommentsLoaded: false
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
    case ActionType.LOAD_FILM:
      return {
        ...state,
        currentFilm: action.payload,
        isCurrentFilmLoaded: true
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoaded: true
      };
    case ActionType.CHANGE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    case ActionType.CHANGE_ACTIVE_FILM:
      return {
        ...state,
        activeFilmId: action.payload
      };
    case ActionType.RESET_CURRENT_FILM:
      return {
        ...state,
        isCurrentFilmLoaded: false
      };
    default:
      return state;
  }
};

export {reducer};
