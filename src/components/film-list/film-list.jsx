import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';
import {connect} from 'react-redux';

const FilmList = (props) => {
  const {films, genre, visibleFilms} = props;
  const [isActive, setActive] = useState(0);
  const similarFilms = (genre) ? films.filter((film) => film.genre === genre) : [];
  return (
    <>
      {(!genre) ? films.slice(0, visibleFilms).map((el) => (
        <FilmCard isActive={isActive} key={el.id} film = {el} id={el.id} onHover={()=>setTimeout(()=>{
          setActive(el.id);
        }, 1000)} unHover={()=>setActive(0)}/>
      )) :
        similarFilms.map((el) => (
          <FilmCard isActive={isActive} key={el.id} film = {el} id={el.id} onHover={()=>setActive(el.id)} unHover={()=>setActive(0)}/>
        ))}
    </>
  );
};

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
  genre: PropTypes.string,
  visibleFilms: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  films: (state.genre === `All genres`) ? state.films : state.films.filter((film)=> film.genre === state.genre),
  visibleFilms: state.visibleFilms
});

export {FilmList};

export default connect(mapStateToProps, null)(FilmList);

