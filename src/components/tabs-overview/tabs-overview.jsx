import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const TabsOverview = ({currentFilm}) => {
  return (
    <>

      <div className="movie-rating">
        <div className="movie-rating__score">{currentFilm.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">{currentFilm.scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {currentFilm.description}
        <p className="movie-card__director"><strong>Director: {currentFilm.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {currentFilm.starring.map((star) => star + `, `)} and other</strong></p>


      </div>
    </>
  );
};

TabsOverview.propTypes = {
  currentFilm: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  currentFilm: state.currentFilm
});

export {TabsOverview};
export default connect(mapStateToProps, null)(TabsOverview);
