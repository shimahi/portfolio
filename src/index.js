import React from 'react';
import ReactDOM from 'react-dom';

import './scss/style.scss';
import { BrowserRouter as BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Header from './Header';
import Main from './Main'
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Main />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
