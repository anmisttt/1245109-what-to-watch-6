import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";

const App = (props) => {
  const {filmInfo} = props;
  return <Main filmInfo={filmInfo}></Main>;
};

App.propTypes = {
  filmInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }),
};

export default App;
