import React from 'react';
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return(
      <div className="bg-light d-flex flex-column flex-md-row align-items-center sticky-top p-3 px-md-4 mb-3">
        <h5 className="my-0 mr-md-auto font-weight-normal">Who is shimahi?</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <Link className="p-2 trans-green" to="/portfolio">me</Link>
          <Link className="p-2 trans-red" to="/portfolio/mine">mine</Link>
          <Link className="p-2 trans-lightblue" to="/portfolio/us">us</Link>
        </nav>
      </div>
    )
  };
}