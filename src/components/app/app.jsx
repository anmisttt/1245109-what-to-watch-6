import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import NotFound from "../not-found/not-found";
import {connect} from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import {fetchFilmsList} from '../../store/api-actions';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';


const App = (props) => {
  const {filmInfo, films, isDataLoaded, onLoadData} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  return (
    (isDataLoaded) ?
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route exact path="/" render={({history}) => (
            <Main filmInfo={filmInfo} films={films} onLoginButtonClick={() => history.push(`/login`)}></Main>
          )}/>
          <Route exact path="/login"> <SignIn/></Route>
          <PrivateRoute exact
            path="/mylist"
            render={()=><MyList films={films}/>}>
          </PrivateRoute>
          <Route exact path="/films/:id">
            <Film></Film>
          </Route>
          <PrivateRoute exact
            path="/films/:id/review"
            render={()=><AddReview film={films[0]}/>}>
          </PrivateRoute>
          <Route exact path="/player/:id">
            <Player film={films[0]}/>
          </Route>
          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </BrowserRouter> :
      <LoadingScreen></LoadingScreen>
  );
};

App.propTypes = {
  filmInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }),
  films: PropTypes.array.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: state.films,
  isDataLoaded: state.isDataLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFilmsList());
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
