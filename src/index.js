import React from 'react';
import ReactDOM from 'react-dom';

import './scss/style.scss';
import { BrowserRouter as BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Menu from './Menu';
import Main from './Main'
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <React.Fragment>
          <Menu />
          <Main />
          <div className="outline">
            <div></div>
            <div></div>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
