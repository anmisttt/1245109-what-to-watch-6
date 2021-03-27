import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const ShowMore = ({increasevisibleFilmsCount}) => {
  return (<div className="catalog__more">
    <button className="catalog__button" type="button" onClick={(evt) => {
      evt.preventDefault();
      increasevisibleFilmsCount();
    }}>
      Show more
    </button>
  </div>);
};

ShowMore.propTypes = {
  increasevisibleFilmsCount: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispantch) => ({
  increasevisibleFilmsCount() {
    dispantch(ActionCreator.increasevisibleFilmsCount());
  }
});

export {ShowMore};
export default connect(null, mapDispatchToProps)(ShowMore);
