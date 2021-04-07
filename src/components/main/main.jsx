import React, {useEffect} from "react";
import PropTypes from "prop-types";
import FilmList from "../film-list/film-list";
import GenreList from "../genre-list/genre-list";
import {connect} from 'react-redux';
import ShowMore from "../show-more/show-more";
import Header from "../header/header";
import {getFilms, getVisibleFilms, getPromoFilm, getStatusPromoFilmLoaded} from '../../store/data/selectors';
import {getVisibleFilmsCount} from '../../store/films/selectors';
import MovieButtons from "../movie-buttons/MovieButtons";
import {fetchPromoFilm} from '../../store/api-actions';
import LoadingScreen from "../loading-screen/loading-screen";
import {changeActiveFilm} from '../../store/action';


const Main = (props) => {
  const {promoFilm, films, visibleFilms, visibleFilmsCount, isPromoFilmLoaded, loadPromoFilm, changeActiveFilmId} = props;

  const filmId = promoFilm.id;

  useEffect(() => {

    if (!isPromoFilmLoaded) {
      loadPromoFilm();
      changeActiveFilmId(filmId);
    }
  }, [isPromoFilmLoaded]);

  return (
    (isPromoFilmLoaded) ?
      <React.Fragment>
        <section className="movie-card">
          <div className="movie-card__bg">
            <img
              src={promoFilm.backgroundImage}
              alt="The Grand Budapest Hotel"
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header></Header>

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img
                  src={promoFilm.posterImage}
                  alt="The Grand Budapest Hotel poster"
                  width="218"
                  height="327"
                />
              </div>

              <div className="movie-card__desc">
                <h2 className="movie-card__title">{promoFilm.name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{promoFilm.genre}</span>
                  <span className="movie-card__year">{promoFilm.released}</span>
                </p>

                <MovieButtons filmId={promoFilm.id}></MovieButtons>
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
      :
      <LoadingScreen></LoadingScreen>
  );
};

Main.propTypes = {
  promoFilm: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired,
  visibleFilms: PropTypes.array.isRequired,
  visibleFilmsCount: PropTypes.number.isRequired,
  loadPromoFilm: PropTypes.func.isRequired,
  isPromoFilmLoaded: PropTypes.bool.isRequired,
  changeActiveFilmId: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  visibleFilms: getVisibleFilms(state),
  visibleFilmsCount: getVisibleFilmsCount(state),
  promoFilm: getPromoFilm(state),
  isPromoFilmLoaded: getStatusPromoFilmLoaded(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadPromoFilm() {
    dispatch(fetchPromoFilm());
  },
  changeActiveFilmId(filmId) {
    dispatch(changeActiveFilm(filmId));
  }
});


export {Main};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

