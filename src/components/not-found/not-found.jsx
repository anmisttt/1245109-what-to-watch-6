import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <React.Fragment>
      <div className="not-found">
        <div className="number">404 Not Found</div>
        <Link className="main-return" to="/">Return on main page</Link>
      </div>
    </React.Fragment>
  );
}
;

export default NotFound;
