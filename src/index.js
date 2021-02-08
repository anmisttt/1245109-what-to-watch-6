import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Setting = {
  FILMINFO: {
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    year: 2014,
  },
};

ReactDOM.render(
    <App filmInfo={Setting.FILMINFO} />,
    document.querySelector(`#root`)
);
