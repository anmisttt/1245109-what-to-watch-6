import {ActionType} from '../action';

const initialState = {
  films: [],
  comments: [],
  currentFilm: {},
  promoFilm: {},
  isDataLoaded: false,
  isCurrentFilmLoaded: false,
  isPromoFilmLoaded: false,
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
    case ActionType.LOAD_CURRENT_FILM:
      return {
        ...state,
        currentFilm: action.payload,
        isCurrentFilmLoaded: true
      };
    case ActionType.LOAD_PROMO_FILM:
      return {
        ...state,
        promoFilm: action.payload,
        isPromoFilmLoaded: true
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoaded: true
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

export {data};
