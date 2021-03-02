import React, {useState} from "react";
import PropTypes from 'prop-types';

const FilmCard = (props) => {
  const {film, id} = props;
  const [, setActive] = useState(0);
  return (
    <>
      <article className="small-movie-card catalog__movies-card" onMouseEnter={() => setActive(id)}>
        <div className="small-movie-card__image">
          <img
            src={film.previewImage}
            alt={film.name}
            width="280"
            height="175"
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">
            Fantastic Beasts: The Crimes of Grindelwald
          </a>
        </h3>
      </article>
    </>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
  }),
  id: PropTypes.number.isRequired
};

export default FilmCard;
