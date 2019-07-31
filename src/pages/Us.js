import React from 'react';
import bg_1 from '../image/us_background_1.jpg';
import bg_2 from '../image/us_background_2.jpg';
import bg_3 from '../image/us_background_3.jpg';
import bg_4 from '../image/us_background_4.jpg';
import bg_5 from '../image/us_background_5.jpg';
import bg_6 from '../image/us_background_6.jpg';
import logo from '../image/paroleise_logo.svg';

const bgArray = [bg_1, bg_2, bg_3, bg_4, bg_5, bg_6];

export default class Us extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: bgArray[0]
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.changeBackgroundImage(),
      8000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  changeBackgroundImage() {
    let countImage = bgArray.indexOf(this.state.image);
    console.log(countImage);
    if (countImage === 5) {
      countImage = -1
    }
    this.setState({
      image: bgArray[countImage + 1]
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
