import React from 'react';
import { BrowserRouter as Router, NavLink, Switch } from "react-router-dom";
export default class Menu extends React.Component {
  render() {

    return(
      <nav>
        <div className="navigation-items">
          <NavLink exact={true} to="/portfolio" activeClassName='is-active'>me</NavLink>
          <NavLink to="/portfolio/mine" activeClassName='is-active'>mine</NavLink>
          <NavLink to="/portfolio/us" activeClassName='is-active'>us</NavLink>
          <span className="subtitle">Shimahi portfolio</span>
        </div>
      </nav>
    )
  };
}