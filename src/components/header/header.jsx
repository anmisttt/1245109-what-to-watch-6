import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {logout} from '../../store/api-actions';
import {useHistory} from 'react-router-dom';
import Logo from '../logo/logo';

const Header = ({authorizationStatus, onLogoutButtonClick}) => {
  const history = useHistory();
  return (
    <header className="page-header movie-card__head">

      <Logo/>


      <div className="user-block">
        {authorizationStatus ? <div className="user-block__avatar" onClick={() => onLogoutButtonClick()}>
          <img
            src="img/avatar.jpg"
            alt="User avatar"
            width="63"
            height="63"
          /></div> :
          <a href="#" className="catalog__genres-link" onClick={(evt) => {
            evt.preventDefault();
            history.push(`/login`);
          }}>
              Sign in</a>
        }
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.bool.isRequired,
  onLogoutButtonClick: PropTypes.func.isRequired
};


const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutButtonClick() {
    dispatch(logout());
  }
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
