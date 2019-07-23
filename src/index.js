import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './scss/style.scss';

import Header from './components/Header';
import Me from './components/Me';
import Mine from './components/Mine';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route path='/Me' component={Me}/>
          <Route path='/Mine' component={Mine}/>
        </Router>

        {/*<Content />
        <Footer />*/}
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.querySelector('#app')
);