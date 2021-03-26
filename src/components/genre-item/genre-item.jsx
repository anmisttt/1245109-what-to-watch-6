import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const GenreItem = ({genre, id, isActive, setActive, updateGenre}) => {
  return (<li className={(isActive === id) ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`} onClick={() => {
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
  id: PropTypes.number.isRequired,
  isActive: PropTypes.number.isRequired,
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
