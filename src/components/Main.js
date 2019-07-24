import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import '../scss/style.scss';
import Me from '../pages/Me';
import Mine from '../pages/Mine';
import Us from '../pages/Us';

export default class Main extends React.Component {
  render() {
    return(
      <Container>
        <div className="row">
          <Switch>
            <Route exact path="/portfolio" component={Me} />
            <Route path="/portfolio/mine" component={Mine} />
            <Route path="/portfolio/us" component={Us} />
          </Switch>
        </div>
      </Container>
    )
  };
}