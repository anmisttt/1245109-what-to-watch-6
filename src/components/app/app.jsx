import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import NotFound from "../not-found/not-found";
import {connect} from 'react-redux';


const App = (props) => {
  const {filmInfo, films} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main filmInfo={filmInfo} films={films}></Main>;
        </Route>
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route exact path="/mylist">
          <MyList films={films}></MyList>
        </Route>
        <Route exact path="/films/:id">
          <Film currentFilm={films[0]} films={films}></Film>
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview film={films[0]}/>
        </Route>
        <Route exact path="/player/:id">
          <Player film={films[0]}/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  filmInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }),
  films: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  films: state.films
});

export {App};

export default connect(mapStateToProps, null)(App);
