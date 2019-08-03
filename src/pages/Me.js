import React from 'react';
import Skill from '../components/Skill';
import '../data/skills.json'
import ore from '../image/ore.jpg';
import me from '../image/me.svg';
import Footer from '../Footer.js';

const Headline = (props) => (
  <div className="headline">
    <h1 className="headline__title">{props.title}</h1>
    <p className="headline__subtitle">{props.subtitle}</p>
  </div>
)

const Nbsp = () => (
  <>&nbsp;&nbsp;&nbsp;</>
)

export default class Me extends React.Component {
  render() {
    const data = require('../data/skills.json');
    return (
      <div className="container">

        <div className="head">
          <div className="head__item">
            <img src={me} alt=''  />
          </div>
        </div>
        <div className="portrait">
          <img src={ore} alt="俺" />
        </div>
        <div className="profile me-item">
          <Headline title="HIKARU MAESHIMA" subtitle="前島 光 / しまひ" />
          <div className="profile-content">
            <p>
              1994年12月16日生
              <br/>
              Web開発に興味を持ち22歳からプログラミングを始める。
              <br/>
              ノベルティ制作会社、デザイン事務所を経て、現在はWeb開発会社でエンジニアとして勤務。
              <br/>
              九州大学音響設計学科卒業、AB型。
              <br/>
              ギターで曲を作って同人イベントに出展するのが趣味。
              <br/>
            </p>
            <div className="profile-content__links">
              <a href='https://github.com/shimahi' target='_blank' rel="noreferrer noopener">GitHub↗︎</a>
              <a href='https://twitter.com/prlsmh' target='_blank' rel="noreferrer noopener">twitter↗︎</a>
            </div>
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
          <div className="profile-content">
            <p>
              〜2017年<Nbsp />
              九州大学音響設計学科卒業、デザイン・音響・メディアアートなどを学び、聴覚についての卒論を書く。
            </p>
            <span className="arrow-bottom">↓</span>
            <p>
              2018 春<Nbsp />
              ノベルティ制作会社でカスタマーサポートの仕事をする
              <br/>
              DTPオペレーションを通してIllustratorやPhotoshopの基礎を取得。
              <br/>
              以前から開発の仕事がしたかったため5月末で退職
            </p>
            <span className="arrow-bottom">↓</span>
            <p>
              2018 夏<Nbsp />
              デザイン事務所でアルバイトを始め、印刷物・Webのデザインや写真素材の作成などを行う。
              <br/>
              Web制作の仕事も担当し、HTMLコーディングやWordpress構築を得る。
              <br/>
              また、独学でRubyの勉強を続け、個人でWebサービスをリリースするなど、Web開発の経験を積んでゆく。
              <br/>
              約4ヶ月フルタイムでアルバイトを続け、就職活動に成功したため退職。
            </p>
            <span className="arrow-bottom">↓</span>
            <p>2018 秋〜<Nbsp />
            IT企業でWebプログラマとして勤務(現職)

            </p>
            <span className="arrow-bottom">↓</span>
            <p>2019 夏〜<Nbsp />
            パートナーが名古屋の企業に就職したため、名古屋への引っ越し・転職を準備し始める。<br/>
            面白い企画をやっていて、Webの経験が活かせるような企業を探し中。。。
            </p>
          </div>
        </div>

        <div className="stance me-item">
          <Headline title="STANCE" subtitle="やりたいこと・求めてること" />
          <div className="profile-content">
            いぬ〜
          </div>
        </div>

        <div className="ability me-item">
          <Headline title="ABILITY" subtitle="できること" />
          <div className="profile-content">
            いぬいぬ〜
          </div>
        </div>

        <div className="contact me-item">
          <Headline title="CONTACT" subtitle="連絡先" />
          <div className="profile-content">
            <p>
              twitterのDMを開放しているので、何かあればご連絡ください
            </p>
            <span className="arrow-bottom">↓</span>
            <p className="contact-dm">
              <a href='https://twitter.com/prlsmh' target='_blank' rel="noreferrer noopener">@prlsmh</a>
            </p>
          </div>
        </div>
      <Footer />
      </div>
    );
  }
}