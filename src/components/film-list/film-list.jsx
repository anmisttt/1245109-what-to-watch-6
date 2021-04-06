import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const FilmList = (props) => {
  const {films, genre, visibleFilmsCount, redirectToActiveFilm} = props;
  const [isActive, setActive] = useState(0);
  const similarFilms = (genre) ? films.filter((film) => film.genre === genre) : [];
  return (
    <>
      {(!genre) ? films.slice(0, visibleFilmsCount).map((el) => (
        <FilmCard isActive={isActive} key={el.id} film = {el} id={el.id}
          onHover={()=>setTimeout(()=>{
            setActive(el.id);
          }, 1000)}
          unHover={()=>setActive(0)}
          handleClick={() => {
            redirectToActiveFilm(`films/${el.id}`);
          }}
        />
      )) :
        similarFilms.map((el) => (
          <FilmCard isActive={isActive} key={el.id} film = {el} id={el.id}
            onHover={()=>setActive(el.id)}
            unHover={()=>setActive(0)}
            handleClick={() => {
              redirectToActiveFilm(`${el.id}`);
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
  redirectToActiveFilm: PropTypes.func.isRequired

};

const mapStateToProps = (state) => ({
  visibleFilmsCount: state.visibleFilmsCount,
  activeFilmId: state.activeFilmId
});

const mapDispatchToProps = (dispatch) => ({
  redirectToActiveFilm(url) {
    dispatch(ActionCreator.redirectToRoute(url));
  }
});

export {FilmList};

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);

