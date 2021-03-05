import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';


const FilmList = (props) => {
  const {films} = props;
  const [, setActive] = useState(0);


  return (
    <>
      {films.map((el) => (
        <FilmCard key={el.id} film = {el} id={el.id} onHover={()=>setActive(el.id)}/>
      ))}
    </>
  );
};

FilmList.propTypes = {
  films: PropTypes.array.isRequired
};

export default FilmList
;
