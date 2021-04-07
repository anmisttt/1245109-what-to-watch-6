import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increaseVisibleFilmsCount} from '../../store/action';

const ShowMore = ({updateVisibleFilmsCount}) => {
  return (<div className="catalog__more">
    <button className="catalog__button" type="button" onClick={(evt) => {
      evt.preventDefault();
      updateVisibleFilmsCount();
    }}>
      Show more
    </button>
  </div>);
};

ShowMore.propTypes = {
  updateVisibleFilmsCount: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispantch) => ({
  updateVisibleFilmsCount() {
    dispantch(increaseVisibleFilmsCount());
  }
});

export {ShowMore};
export default connect(null, mapDispatchToProps)(ShowMore);
