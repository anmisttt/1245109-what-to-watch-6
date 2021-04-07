import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCurrentFilm} from '../../store/data/selectors';

const TabsDetails = ({currentFilm}) => {
  return (
    <>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{currentFilm.director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {currentFilm.starring.map((star) => star + `, `)}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{currentFilm.runTime}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{currentFilm.genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{currentFilm.released}</span>
          </p>
        </div>
      </div>
    </>
  );
};

TabsDetails.propTypes = {
  currentFilm: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  currentFilm: getCurrentFilm(state)
});

export {TabsDetails};
export default connect(mapStateToProps, null)(TabsDetails);
