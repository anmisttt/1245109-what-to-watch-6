import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import {createAPI} from "./services/api";
import {ActionCreator} from './store/action';

const Setting = {
  FILMINFO: {
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    year: 2014,
  },
};

const api = createAPI(
    () => store.dispatch(ActionCreator.checkAuthorization(false))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App
        filmInfo={Setting.FILMINFO}
      />
    </Provider>,
    document.querySelector(`#root`)
);
