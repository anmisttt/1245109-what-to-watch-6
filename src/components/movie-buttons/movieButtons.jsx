import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {redirectToRoute} from '../../store/action';
import {getActiveFilmId} from '../../store/films/selectors';

const MovieButtons = ({authorizationStatus, isFilm, redirectToUrl, promoFilmId}) => {

  const filmId = (useParams().id || promoFilmId);
  const history = useHistory();

  return (
    <div className="movie-card__buttons">
      <button className="btn btn--play movie-card__button" type="button" onClick = {(evt)=> {
        evt.preventDefault();
        redirectToUrl(`/player/${filmId}`);
      }}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list movie-card__button" type="button" onClick = {(evt)=> {
        evt.preventDefault();
        redirectToUrl(`/mylist`);
      }}>
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button>
      {authorizationStatus && isFilm && <a href="add-review.html" className="btn movie-card__button" onClick = {(evt)=> {
        evt.preventDefault();
        history.push(`${filmId}/review`);
      }} >Add review</a>}
    </div>
  );
};

MovieButtons.propTypes = {
  authorizationStatus: PropTypes.bool.isRequired,
  isFilm: PropTypes.bool,
  redirectToUrl: PropTypes.func.isRequired,
  promoFilmId: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  promoFilmId: getActiveFilmId(state)
});

const mapDispatchToProps = (dispatch) => ({
  redirectToUrl(url) {
    dispatch(redirectToRoute(url));
  }

});

export {MovieButtons};

export default connect(mapStateToProps, mapDispatchToProps)(MovieButtons);
