import {ActionType} from '../action';

const initialState = {
  authorizationStatus: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };

    default:
      return state;
  }
};

export {user};
