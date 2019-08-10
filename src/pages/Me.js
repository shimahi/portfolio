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
            </p>
            <div className="profile-content__links">
              <a href='https://github.com/shimahi' target='_blank' rel="noreferrer noopener">GitHub↗︎</a>
              <a href='https://twitter.com/prlsmh' target='_blank' rel="noreferrer noopener">twitter↗︎</a>
            </div>
          </div>
        </div>

        <div className="me-item">
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
                  既存の静的サイトのAMP化や、サーバーサイドAPIを使用するHeadless CMSの開発に取り組みたいです。
                  その他、関心があるのは以下のような技術です。
                </p>
                <ul>
                  <li>Next.jsでのアプリ開発</li>
                  <li>Three.js / HTML Canvasなどのグラフィック描画</li>
                  <li>Firebase / AzureなどのmBaaSを使った開発</li>
                  <li>TypeScript言語</li>
                </ul>
                <p>
                  Webサービスのデザインについて考えることが好きで、わかりやすくて楽しいUIを設計したり、サイトのパフォーマンスを上げたりして、ユーザーにより快適な体験を与えたいと考えており、そのため上記のフロントエンド技術に高い関心を持っています。
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
              九州大学音響設計学科卒業、デザイン・波動工学・生理学・電気工学・メディアアートなどを学び、聴覚体制化についての卒論を書く。
              学外ではオーケストラやバンド活動の他、インスタレーションの設営や自治寮の運営に携わる。
            </p>
            <span className="arrow-bottom">↓</span>
            <p>
              2018 春<Nbsp />
              ノベルティ制作会社でカスタマーサポートの仕事をする。
              <br/>
              DTPオペレーションを通してIllustratorやPhotoshopの基礎を取得。
              <br/>
              以前から開発の仕事がしたかったため5月末で退職。
            </p>
            <span className="arrow-bottom">↓</span>
            <p>
              2018 夏<Nbsp />
              デザイン事務所でアルバイトを始め、印刷物・Webのデザインや写真素材の作成などを行う。
              <br/>
              Web制作の仕事も担当し、HTMLコーディングやWordpress構築の経験を得る。
              <br/>
              また、独学でRubyの勉強を続け、個人でWebサービスをリリースするなど、Web開発の経験を積んでゆく。
              <br/>
              約4ヶ月フルタイムでアルバイトを続け、就職活動に成功したため退職。
            </p>
            <span className="arrow-bottom">↓</span>
            <p>
              2018 秋<Nbsp />
              IT企業でWebプログラマとして勤務(現職)
              <br/>
              信販企業の業務システムの受託開発・保守や、自社サービスのシステム開発(主にRuby on Rails)のほか、ホームページ制作やCMSの開発を担当する。
              <br/>
              Gitを通じたワークフローの中で、チーム開発をする上でのコーディングや設計の考え方、コミュニケーション、タスク管理の手法を学ぶ。
              <br/>
              業務外でもWebアプリを開発したりReact等の新しい技術を勉強したりするなど、日常的にWebプログラミングを継続している。
            </p>
            <span className="arrow-bottom">↓</span>
            <p>
              2019 夏〜<Nbsp />
              婚約者が大学を卒業して名古屋の企業に就職したため、名古屋への引っ越し準備を始める。
              <br/>
              転職やクラウド応募の自己紹介用にこのポートフォリオサイトを制作する。
            </p>
          </div>
        </div>

        <div className="stance me-item">
          <Headline title="STANCE" subtitle="やりたいこと・求めてること" />
          <div className="profile-content">
            <p>
              toC向けサービスの企画開発に携わる仕事を探しています。
              <br/>
              特に、メディア運営に興味があり、マークアップ、サーバーサイド構築、デザインについて自分のスキルを活かしたいと考えています。
            </p>
            <p>
              誰のためにサービスを作るか、なぜこのサービスに価値があるのか、を考える姿勢は一貫して大切にしています。
              <br/>
              エンジニアとして働きたい。というよりも、面白い企画を形にしていくためのメンバーとして働き、その上で自分の持っているWeb技術を活かしたい。という意識を持っています。
            </p>
            <p>
              やらされ作業になった途端パフォーマンスが下がるので、なぜ作るのか、という目的・全体像を常に共有できるチームで仕事をしたいです。
              プログラマー・デザイナー・ライターが完全に仕事を分離しているのも良くないと思っていて、成果物に対して改善案があれば意見はしっかり言いますし、チーム内に意見を言い合える風土があることを望んでいます。
            </p>
            <p>
              技術的な領域では、スキル欄で書いてあるようにフロントエンド技術を活かせる仕事がしたいと思っています。
              <br/>
              しかし、前述の通り「何をするか」よりも「なぜするか」を一番の軸にしており、言語や技術のトレンドよりも、チーム内環境や企画に共感できるかがどうかを重要視しています。
            </p>
          </div>
        </div>

        <div className="contact me-item">
          <Headline title="CONTACT" subtitle="連絡先" />
          <div className="profile-content">
            <p>
              twitterのDMを開放しているので、お気軽にご連絡ください。
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