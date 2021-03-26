import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const GenreItem = ({genre, isActive, setActive, updateGenre}) => {
  return (<li className={(isActive) ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`} onClick={(evt) => {
    evt.preventDefault();
    updateGenre(genre);
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
  updateGenre: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispantch) => ({
  updateGenre(genre) {
    dispantch(ActionCreator.changeGenre(genre));
  }
});

export {GenreItem};
export default connect(null, mapDispatchToProps)(GenreItem);
