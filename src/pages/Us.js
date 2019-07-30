import React from 'react';
import blue from '../image/bl.jpg';
import orange from '../image/or.jpg';
import logo from '../image/paroleise_logo.svg';

export default class Us extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: orange
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.changeBackgroundImage(),
      7000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  changeBackgroundImage() {
    this.setState({
      image: this.state.image == orange ? blue : orange
    })
  }

  render() {
    return (
      <div>
        <div className="background-contaniner">
          <img src={this.state.image} className="us-background" />
          <img src={logo} className="us-logo" />
        </div>
        <div className="container">

          <div className="mt-4 p-4 border d-flex">
            <div>
              <img src='https://placehold.jp/150x150.png' alt='' />
            </div>
            <h3>paroleise</h3>
          </div>
        </div>
      </div>

    );
  }
}
