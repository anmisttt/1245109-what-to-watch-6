import {ActionType} from './action';

const initialState = {
  activeFilmId: 0,
  isCurrentFilmLoaded: false
};

const film = (state = initialState, action) => {
  switch (action.type) {
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

export {film};
