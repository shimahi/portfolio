import React from 'react';
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";

export default class Menu extends React.Component {
  render() {
    return(
      <nav>
        <div className="navigation-items">
          <Link to="/portfolio">me</Link>
          <Link to="/portfolio/mine">mine</Link>
          <Link to="/portfolio/us">us</Link>
          <span className="subtitle">Shimahi portfolio</span>
        </div>
      </nav>
    )
  };
}