import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';
import {connect} from 'react-redux';
import {redirectToRoute, resetCurrentFilm} from '../../store/action';
import {getVisibleFilmsCount} from '../../store/films/selectors';
import {getActiveFilmId} from '../../store/films/selectors';

const FilmList = (props) => {
  const {films, genre, visibleFilmsCount, redirectToActiveFilm, resetFilm} = props;
  const [isActive, setActive] = useState(0);
  const similarFilms = (genre) ? films.filter((film) => film.genre === genre) : [];
  const clickHandler = (url) => {
    resetFilm();
    redirectToActiveFilm(url);
  };
  return (
    <>
      {(!genre) ? films.slice(0, visibleFilmsCount).map((el) => (
        <FilmCard isActive={isActive} key={el.id} film = {el} id={el.id}
          onHover={()=>setTimeout(()=>{
            setActive(el.id);
          }, 1000)}
          unHover={()=>setActive(0)}
          handleClick={() => {
            clickHandler(`films/${el.id}`);
          }}
        />
      )) :
        similarFilms.map((el) => (
          <FilmCard isActive={isActive} key={el.id} film = {el} id={el.id}
            onHover={()=>setActive(el.id)}
            unHover={()=>setActive(0)}
            handleClick={() => {
              clickHandler(`${el.id}`);
            }}/>
        ))}
    </>
  );
};

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
  genre: PropTypes.string,
  visibleFilmsCount: PropTypes.number.isRequired,
  activeFilmId: PropTypes.number.isRequired,
  redirectToActiveFilm: PropTypes.func.isRequired,
  resetFilm: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  visibleFilmsCount: getVisibleFilmsCount(state),
  activeFilmId: getActiveFilmId(state)
});

const mapDispatchToProps = (dispatch) => ({
  redirectToActiveFilm(url) {
    dispatch(redirectToRoute(url));
  },
  resetFilm() {
    dispatch(resetCurrentFilm());
  }

});

export {FilmList};

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);

