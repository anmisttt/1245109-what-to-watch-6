import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const ShowMore = ({increaseVisibleFilms}) => {
  return (<div className="catalog__more">
    <button className="catalog__button" type="button" onClick={(evt) => {
      evt.preventDefault();
      increaseVisibleFilms();
    }}>
      Show more
    </button>
  </div>);
};

ShowMore.propTypes = {
  increaseVisibleFilms: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispantch) => ({
  increaseVisibleFilms() {
    dispantch(ActionCreator.increaseVisibleFilms());
  }
});

export {ShowMore};
export default connect(null, mapDispatchToProps)(ShowMore);
