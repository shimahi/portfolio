import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './scss/style.scss';
import Me from './pages/Me';
import Mine from './pages/Mine';
import Us from './pages/Us';

export default class Main extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path="/portfolio" component={Me} />
        <Route path="/portfolio/mine" component={Mine} />
        <Route path="/portfolio/us" component={Us} />
      </Switch>
    )
  };
}