import React from 'react';
import Skill from '../components/Skill';
import '../data/skills.json'
import ore from '../image/ore.jpg';

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
        <div className="portrait me-item">
          <img src={ore} alt="俺" />
        </div>
        <div className="profile me-item">
          <Headline title="HIKARU MAESHIMA" subtitle="前島 光 / しまひ" />
          <div className="profile-content">
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

        <div className="skill me-item">
          <Headline title="SKILL" subtitle="スキル" />
          <div className="profile-content">
            <Skill {...data.frontend} />
            <Skill {...data.serverside} />
            <Skill {...data.infrastructure} />
            <Skill {...data.design} />
            <div className="skill">
              <h4 className="skill__title"><span className="skill__title-decoration">█</span>現在の興味・学習方向</h4>
              <div className="skill__content">
                <p>
                  JavaScriptを中心としたフロントエンド技術全般に興味があり、特にReactが好きでスキル向上のため勉強を続けています。
                  <br/>
                  既存の静的サイトのAMP化や、CMSサイトをハイパフォーマンスにするためのHeadless CMS
                  その他、関心があるのは以下のような技術です。
                </p>
                <ul>
                  <li>Next.jsでのアプリ開発</li>
                  <li>Three.js / HTML Canvasなどのグラフィック描画</li>
                  <li>Rails API / Wordpress API を使用したHeadless CMS</li>
                  <li>Firebase / AzureなどのmBaaSを使った開発</li>
                  <li>TypeScript言語</li>
                </ul>
                <p>
                  フロントエンド技術に関心が高いのは、複雑なシステムを構築するよりもUIやアニメーションを作ったり、
                  サービスのデザインについて考える方が好きだからです。
                  <br/>
                  未経験分野では、スマホアプリ開発(Swift / Kotlin / React Native)をやってみたいです。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carrier me-item">
          <Headline title="CARRIER" subtitle="経歴" />
        </div>

        <div className="stance me-item">
          <Headline title="STANCE" subtitle="仕事への考え方" />
        </div>

        <div className="contact me-item">
          <Headline title="CONTACT" subtitle="連絡先" />
        </div>

      </div>
    );
  }
}