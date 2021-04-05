import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {ActionCreator} from '../../store/action';

const FilmList = (props) => {
  const {films, genre, visibleFilmsCount, changeActiveFilm} = props;
  const [isActive, setActive] = useState(0);
  const similarFilms = (genre) ? films.filter((film) => film.genre === genre) : [];
  const history = useHistory();
  return (
    <>
      {(!genre) ? films.slice(0, visibleFilmsCount).map((el) => (
        <FilmCard isActive={isActive} key={el.id} film = {el} id={el.id}
          onHover={()=>setTimeout(()=>{
            setActive(el.id);
          }, 1000)}
          unHover={()=>setActive(0)}
          handleClick={() => {
            history.push(`/films/${el.id}`);
            changeActiveFilm(el.id);
          }}
        />
      )) :
        similarFilms.map((el) => (
          <FilmCard isActive={isActive} key={el.id} film = {el} id={el.id}
            onHover={()=>setActive(el.id)}
            unHover={()=>setActive(0)}
            handleClick={() => {
              changeActiveFilm(el.id);
              history.push(`/films/${el.id}`);
            }}/>
        ))}
    </>
  );
};

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
  genre: PropTypes.string,
  visibleFilmsCount: PropTypes.number.isRequired,
  changeActiveFilm: PropTypes.func.isRequired,
  activeFilmId: PropTypes.number.isRequired

};

const mapStateToProps = (state) => ({
  visibleFilmsCount: state.visibleFilmsCount,
  activeFilmId: state.activeFilmId
});

const mapDispatchToProps = (dispatch) => ({
  changeActiveFilm(activeFilmId) {
    dispatch(ActionCreator.changeActiveFilm(activeFilmId));
  }
});

export {FilmList};

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);

