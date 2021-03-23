import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';

const FilmList = (props) => {
  const {films, genre} = props;
  const [isActive, setActive] = useState(0);
  const similarFilms = (genre) ? films.filter((film) => film.genre === genre) : [];
  return (
    <>
      {(!genre) ? films.map((el) => (
        <FilmCard isActive={isActive} key={el.id} film = {el} id={el.id} onHover={()=>setActive(el.id)} unHover={()=>setActive(0)}/>
      )) :
        similarFilms.map((el) => (
          <FilmCard isActive={isActive} key={el.id} film = {el} id={el.id} onHover={()=>setActive(el.id)} unHover={()=>setActive(0)}/>
        ))}
    </>
  );
};

FilmList.propTypes = {
  films: PropTypes.array.isRequired,
  genre: PropTypes.string
};

export default FilmList
;
