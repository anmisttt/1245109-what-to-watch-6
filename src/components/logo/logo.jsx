import React from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';

const Logo = ({footer}) => {
  const history = useHistory();
  return (
    <div className="logo">
      <a className={footer ? `logo__link logo__link--light` : `logo__link`} onClick={(evt) => {
        evt.preventDefault();
        history.push(`/`);
      }}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
};

Logo.propTypes = {
  footer: PropTypes.bool
};

export default Logo;
