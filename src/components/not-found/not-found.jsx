import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';

const NotFound = () => {
  return (
    <React.Fragment>
      <div className="not-found">
        <div className="not-found">
          <div className="number">404 Not Found</div>
          <Link className="main-return" to="/">Return on main page</Link>
        </div>
        <Logo footer={true}></Logo>
      </div>
    </React.Fragment>
  );
}
;

export default NotFound;
