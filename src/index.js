import React from 'react';
import ReactDOM from 'react-dom';

import './scss/style.scss';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Header from './Header';
import Main from './Main'
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
  render() {
    return(
      <Router>
        <React.Fragment>
          <Header />
          <Main />
        </React.Fragment>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
