import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.scss';
import { BrowserRouter as BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Menu from './Menu';
import Main from './Main'
import ScrollToTop from './components/ScrollToTop';
import * as serviceWorker from './serviceWorker';
import { animateScroll as scroll } from 'react-scroll';

class App extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return(
      <BrowserRouter>
        <ScrollToTop>
          <React.Fragment>
            <Menu />
            <Main />
            <div onClick={this.scrollToTop} className="scroll-top"><span>↑</span>Page Top</div>
            <div className="outline">
              <div></div>
              <div></div>
            </div>
          </React.Fragment>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
