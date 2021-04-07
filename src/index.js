import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/root-reducer';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import {createAPI} from "./services/api";
import {checkAuth} from './store/api-actions';
import {changeAuthorization} from "./store/action";
import {redirect} from "./store/middlewares/redirect";

const Setting = {
  FILMINFO: {
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    year: 2014,
  },
};

const api = createAPI(
    () => store.dispatch(changeAuthorization(false))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
        filmInfo={Setting.FILMINFO}
      />
    </Provider>,
    document.querySelector(`#root`)
);
