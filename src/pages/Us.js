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
    <h1 className="headline__title">{props.title}</h1>
    <p className="headline__subtitle">{props.subtitle}</p>
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
          <p className="about-paroleise">paroleise(パロレズ)は、音楽・デザインを中心とした創作活動を行うサークルです。</p>
          <div className="us-item">
            <Headline title="MEMBER" subtitle="メンバー"/>
            <Member name="しまひ" image={shimahi} post="企画 / 開発 / 作詞 / 作曲 / ギター"/>
            <Member name="mochi" image={mochi} post="デザイン / イラスト / 作詞 / ボーカル"/>
          </div>
          <div className="us-item">
            <Headline title="OVERVIEW" subtitle="概要"/>
            <div className="overview">
              <p>
                曲を作るエンジニア「しまひ」と歌を歌うデザイナー「mochi」による同人ユニット。
              </p>
              <p>
                2016年福岡市博多区で結成
                <br/>
                しまひが作曲・録音、mochiがボーカル・デザインを行い制作したCDを同人誌即売で頒布する活動を基本とするほか、
                mochiのタイポグラフィ(文字デザイン)をまとめた同人誌の発行、他サークルとの合同楽曲制作、音楽ライブ活動を続けている。
                <br/>
                Qreate -クリエイターの知識共有サイト のように、しまひがシステム開発、mochiがデザインを担当する
                Webサービスの企画開発も行なっており、同人の枠を超えた創作活動を続けている。
              </p>
              <div class="overview__links">
                <a href='https://m.soundcloud.com/paroleise' target='_blank' rel="noreferrer noopener">SoundCloud</a>
                <a href='https://paroleise.booth.pm/' target='_blank' rel="noreferrer noopener">BOOTH</a>
                <a href='https://github.com/paroleise' target='_blank' rel="noreferrer noopener">GitHub</a>
              </div>
            </div>
          </div>

        </div>
      </div>

    );
  }
}
