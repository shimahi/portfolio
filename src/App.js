import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Me from './pages/Me';
import Mine from './pages/Mine';
import Us from './pages/Us';

export default class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>

          <div className="header d-flex flex-column flex-md-row align-items-center sticky-top p-3 px-md-4 mb-3">
            <h5 className="my-0 mr-md-auto font-weight-normal">Who is shimahi?</h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <Link className="p-2 trans-green" to="/portfolio">me</Link>
              <Link className="p-2 trans-red" to="/portfolio/mine">mine</Link>
              <Link className="p-2 trans-lightblue" to="/portfolio/us">us</Link>
            </nav>
          </div>

          <Container>
            <div className="row">
              <Switch>
                <Route exact path="/portfolio" component={Me} />
                <Route path="/portfolio/mine" component={Mine} />
                <Route path="/portfolio/us" component={Us} />
              </Switch>
            </div>
          </Container>

        </React.Fragment>
      </Router>
    );
  }
}
