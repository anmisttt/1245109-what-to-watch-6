import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const GenreItem = ({genre, isActive, setActive, updateGenre, resetvisibleFilmsCount}) => {
  return (<li className={(isActive) ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`} onClick={(evt) => {
    evt.preventDefault();
    updateGenre(genre);
    resetvisibleFilmsCount();
    setActive();
  }}>
    <a href="#" className="catalog__genres-link">
      {genre}
    </a>
  </li>);
};

GenreItem.propTypes = {
  genre: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  updateGenre: PropTypes.func.isRequired,
  resetvisibleFilmsCount: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  updateGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
  resetvisibleFilmsCount() {
    dispatch(ActionCreator.resetvisibleFilmsCount());
  }
});

export {GenreItem};
export default connect(null, mapDispatchToProps)(GenreItem);
