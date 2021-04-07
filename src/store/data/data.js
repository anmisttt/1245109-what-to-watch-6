import {ActionType} from './action';

const initialState = {
  films: [],
  comments: [],
  currentFilm: {},
  isDataLoaded: false,
  isCurrentFilmLoaded: false,
  isCommentsLoaded: false
};

const data = (state = initialState, action) => {
  switch (action.type) {

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

    default:
      return state;
  }
};

export {data};
