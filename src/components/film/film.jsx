import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import FilmList from '../film-list/film-list';
import Tabs from '../tabs/tabs';
import {connect} from 'react-redux';
import Logo from '../logo/logo';
import Header from '../header/header';
import {useParams} from 'react-router-dom';
import {fetchCurrentFilm} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import {getFilms, getCurrentFilm, getStatusCurrentFilmLoaded} from '../../store/data/selectors';
import MovieButtons from '../movie-buttons/MovieButtons';

const Film = (props) => {
  const {films, loadCurrentFilm, isCurrentFilmLoaded, currentFilm} = props;
  const filmId = useParams().id;

  useEffect(() => {
    if (!isCurrentFilmLoaded) {
      loadCurrentFilm(filmId);
    }
  }, [isCurrentFilmLoaded, filmId]);

  return (
    (isCurrentFilmLoaded) ?
      <React.Fragment>
        <div className="visually-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><symbol id="add" viewBox="0 0 19 20">

            <title>+</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="+" fill="#EEE5B5" points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859"/>
            </g>
          </symbol><symbol id="full-screen" viewBox="0 0 27 27">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z" fill="#FFF9D9" fillOpacity="0.7"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" fill="#FFF9D9" fillOpacity="0.7"/>
          </symbol><symbol id="in-list" viewBox="0 0 18 14">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z" fill="#EEE5B5"/>
          </symbol><symbol id="pause" viewBox="0 0 14 21">

            <title>Artboard</title>
            <desc>Created with Sketch.</desc>
            <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21"/>
              <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21"/>
            </g>
          </symbol></svg>
        </div>
        <section className="movie-card movie-card--full" style={{backgroundColor: `${currentFilm.backgroundColor}`}}>
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={currentFilm.backgroundImage} alt="The Grand Budapest Hotel" />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header></Header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{currentFilm.name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{currentFilm.genre}</span>
                  <span className="movie-card__year">{currentFilm.released}</span>
                </p>

                <MovieButtons isFilm={true}></MovieButtons>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={currentFilm.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
              </div>
              <Tabs></Tabs>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <div className="catalog__movies-list">
              <FilmList films = {films} genre = {currentFilm.genre}></FilmList>
            </div>
          </section>

          <footer className="page-footer"><Logo footer={true}/>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
      :
      <LoadingScreen></LoadingScreen>
  );
}
;

Film.propTypes = {
  films: PropTypes.array.isRequired,
  loadCurrentFilm: PropTypes.func.isRequired,
  currentFilm: PropTypes.object.isRequired,
  isCurrentFilmLoaded: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  currentFilm: getCurrentFilm(state),
  isCurrentFilmLoaded: getStatusCurrentFilmLoaded(state)
});

const mapDispatchToProps = (dispatch) => ({
  loadCurrentFilm(filmId) {
    dispatch(fetchCurrentFilm(filmId));
  }
});

export {Film};

export default connect(mapStateToProps, mapDispatchToProps)(Film);
