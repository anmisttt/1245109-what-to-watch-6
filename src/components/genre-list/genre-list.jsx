import React, {useState} from 'react';
import PropTypes from "prop-types";
import GenreItem from '../genre-item/genre-item';

const GenreList = (props) => {
  const {films} = props;
  const genres = new Set();
  genres.add(`All genres`);
  films.forEach((film) => {
    genres.add(film.genre);
  });
  const [isActive, setActive] = useState(0);
  return (
    <ul className="catalog__genres-list">
      {
        Array.from(genres).map((genre, id) => (
          <GenreItem isActive={isActive} setActive = {() => setActive(id)} genre={genre} key={id} id={id}></GenreItem>
        ))
      }
    </ul>

  );
};

GenreList.propTypes = {
  films: PropTypes.array.isRequired
};

export default GenreList;
