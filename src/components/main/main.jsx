import React from "react";
import PropTypes from "prop-types";
import FilmList from "../film-list/film-list";
import GenreList from "../genre-list/genre-list";
import {connect} from 'react-redux';
import ShowMore from "../show-more/show-more";
import {logout} from '../../store/api-actions';

const Main = (props) => {
  const {filmInfo, films, visibleFilms, visibleFilmsCount, authorizationStatus, onLoginButtonClick, onLogoutButtonClick} = props;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            {authorizationStatus ? <div className="user-block__avatar" onClick={() => onLogoutButtonClick()}>
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width="63"
                height="63"
              /></div> :
              <a href="#" className="catalog__genres-link" onClick={(evt) => {
                evt.preventDefault();
                onLoginButtonClick();
              }}>
                Sign in</a>
            }
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{filmInfo.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{filmInfo.genre}</span>
                <span className="movie-card__year">{filmInfo.year}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList films={films}></GenreList>
          <div className="catalog__movies-list">
            <FilmList films={visibleFilms}></FilmList>
          </div>
          {(visibleFilmsCount < visibleFilms.length) && (visibleFilms.length >= 8) && <ShowMore></ShowMore>}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  filmInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }),
  films: PropTypes.array.isRequired,
  visibleFilms: PropTypes.array.isRequired,
  visibleFilmsCount: PropTypes.number.isRequired,
  authorizationStatus: PropTypes.bool.isRequired,
  onLoginButtonClick: PropTypes.func.isRequired,
  onLogoutButtonClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: state.films,
  visibleFilms: (state.genre === `All genres`) ? state.films : state.films.filter((film)=> film.genre === state.genre),
  visibleFilmsCount: state.visibleFilmsCount,
  authorizationStatus: state.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutButtonClick() {
    dispatch(logout());
  }
});


export {Main};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

