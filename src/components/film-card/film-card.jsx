import React from "react";
import PropTypes from 'prop-types';
import VideoPlayer from '../videoplayer/videoplayer';

const FilmCard = (props) => {
  const {film, id, isActive, onHover} = props;
  return (
    <>
      <article className="small-movie-card catalog__movies-card" onMouseEnter={onHover}>
        <div className="small-movie-card__image">
          {(isActive !== id) && <img src={film.previewImage} alt='film' width="280" height="175"/>}
          {(isActive === id) && (
            <VideoPlayer
              src={film.previewVideoLink}
              image={film.previewImage}
              width="280"
              height="175">
            </VideoPlayer>
          )}

        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">
            {film.name}
          </a>
        </h3>
      </article>
    </>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
  }),
  id: PropTypes.number.isRequired,
  isActive: PropTypes.number.isRequired,
  onHover: PropTypes.func.isRequired
};

export default FilmCard;
