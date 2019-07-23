import React from 'react';
import { Link } from 'react-router-dom'

import Me from './Me';
import Mine from './Mine';

class Header extends React.Component {
  render() {
    return(
      <header>
        <div className="header-content">
          <div className="header-left">Who is shimahi</div>
          <div className="header-right">
            <Link to="/Me">me</Link>
            <Link to="/Mine">mine</Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;