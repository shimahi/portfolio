import React from 'react';
import Product from '../components/Product';
import '../data/products.json'

export default class Mine extends React.Component {
  render() {
    const data = require('../data/products.json');
    return (
      <div className="container">
        <div className="head">
          <div className="head__item">
            <img src='https://placehold.jp/300x100.png' alt=''/>
          </div>
        </div>
        <Product {...data.qreate} />
        <Product {...data.saga} />
        <Product {...data.pachiwiki} />
        <Product {...data.biske} />
        <Product {...data.portfolio} />
      </div>
    );
  }
}