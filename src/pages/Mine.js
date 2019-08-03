import React from 'react';
import Product from '../components/Product';
import '../data/products.json'
import Footer from '../Footer.js';
import mine from '../image/mine.svg';

export default class Mine extends React.Component {
  render() {
    const data = require('../data/products.json');
    return (
      <div className="container">
        <div className="head head-mine">
          <div className="head__item tall">
            <img src={mine} alt=''/>
          </div>
        </div>
        <Product {...data.qreate} />
        <Product {...data.saga} />
        <Product {...data.pachiwiki} />
        <Product {...data.biske} />
        <Product {...data.portfolio} />
        <Footer />
      </div>
    );
  }
}