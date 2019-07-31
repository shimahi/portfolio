import React from 'react';
import bg_1 from '../image/us_background_1.jpg';
import bg_2 from '../image/us_background_2.jpg';
import bg_3 from '../image/us_background_3.jpg';
import bg_4 from '../image/us_background_4.jpg';
import bg_5 from '../image/us_background_5.jpg';
import bg_6 from '../image/us_background_6.jpg';
import logo from '../image/paroleise_logo.svg';
import shimahi from '../image/shimahi.jpg';
import mochi from '../image/mochi.jpg';

const bgArray = [bg_1, bg_2, bg_3, bg_4, bg_5, bg_6];


const Headline = (props) => (
  <div className="headline">
    <h1 className="headline__title">MEMBER</h1>
    <p className="headline__subtitle">メンバー</p>
  </div>
)

const Background = (props) => (
  <div className="background-contaniner">
    <img src={props.image} className="us-background" />
    <img src={logo} className="us-logo" />
  </div>
)

const Member = (props) => (
  <div className="member">
    <div className="member__image">
      <img src={props.image} alt='' />
    </div>
    <div className="member__assets">
      <h4 className="member__assets-name">{props.name}</h4>
      <p className="member__assets-post">{props.post}</p>
    </div>
  </div>
)

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
        <Background image={this.state.image} />
        <div className="container">
          <p className="about-paroleise">paroleise(パロレズ)は、音楽・デザインを中心とした創作活動を行うサークルです</p>
          <div className="us-item">
            <Headline />
            <Member name="しまひ" image={shimahi} post="企画 / 開発 / 作詞 / 作曲 / ギター"/>
            <Member name="mochi" image={mochi} post="デザイン / イラスト / 作詞 / ボーカル"/>
          </div>

        </div>
      </div>

    );
  }
}
