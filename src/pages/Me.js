import React from 'react';
import Skill from '../components/Skill';
import '../data/skills.json'


const Headline = (props) => (
  <div className="headline">
    <h1 className="headline__title">{props.title}</h1>
    <p className="headline__subtitle">{props.subtitle}</p>
  </div>
)

export default class Me extends React.Component {
  render() {
    const data = require('../data/skills.json');
    return (
      <div className="container">

        <div className="head">Me</div>


        <div className="portrait">
          <img src='https://placehold.jp/200x200.png' alt='' />
        </div>

        <div className="profile">
          <Headline title="HIKARU MAESHIMA" subtitle="前島 光" />
          <div className="ml-4">
            <p>
              Web開発に興味を持ち22歳からプログラミングの勉強を始める。
              <br/>
              ノベルティ制作会社、デザイン事務所(アルバイト)を経て、現在はWeb開発会社でエンジニアとして勤務
              <br/>
              1994年12月16日生 九州大学音響設計学科卒業 AB型
              <br/>
              ギターで曲を作って同人イベントに出展するのが趣味
              <br/>
            </p>
          </div>
        </div>

        <div className="skill">
          <Headline title="SKILL" subtitle="スキル" />
          <Skill {...data.frontend} />
          <Skill {...data.serverside} />
          <Skill {...data.infrastructure} />
          <Skill {...data.design} />
        </div>
        <div className="carrier">
          <Headline title="CARRIER" subtitle="経歴" />

        </div>

        <div className="vision">
          <Headline title="VISION" subtitle="興味・学習方向" />
            <p>
              フロントエンド技術全般、特にSPAやHeadless CMSなどといった既存のWebアプリの軽量化。
              <br/>
              その他、mBaaS, React Nativeも年内に着手したい
              <br/>
            </p>
        </div>


        <div className="stance">
          <Headline title="STANCE" subtitle="仕事への考え方" />
        </div>

        <div className="contact">
          <Headline title="CONTACT" subtitle="連絡先" />
        </div>



      </div>
    );
  }
}