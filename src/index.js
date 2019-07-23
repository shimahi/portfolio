import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './scss/style.scss';

import Header from './components/Header';
import Me from './components/Me';
import Mine from './components/Mine';
import App from './App'


ReactDOM.render(
  <App />,
  document.querySelector('#app')
);


/*
<Router history={browserHistory}>
    <Route path="/" component={App} />
</Router>

*/