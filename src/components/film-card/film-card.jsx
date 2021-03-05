import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const FilmCard = (props) => {
  const {film} = props;

  return (
    <>
      <article className="small-movie-card catalog__movies-card" onMouseEnter={props.onHover}>
        <div className="small-movie-card__image">
          <img
            src={film.previewImage}
            alt={film.name}
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={(`films/${film.id}`)}>
            Fantastic Beasts: The Crimes of Grindelwald
          </Link>
        </h3>
      </article>
    </>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }),
  onHover: PropTypes.func.isRequired
};

export default FilmCard;
