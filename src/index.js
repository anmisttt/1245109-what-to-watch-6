import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from './mocks/films';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from "redux-devtools-extension";

const Setting = {
  FILMINFO: {
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    year: 2014,
  },
};

const store = createStore(
    reducer,
    composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App
        filmInfo={Setting.FILMINFO}
        films = {films}
      />
    </Provider>,
    document.querySelector(`#root`)
);
