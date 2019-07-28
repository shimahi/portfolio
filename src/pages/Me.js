import React from 'react';
import Skill from '../components/Skill';
import '../data/skills.json'

export default class Me extends React.Component {
  render() {
    const data = require('../data/skills.json');
    return (
      <div className="container">

        <div className="head">Me</div>

        <div className="mt-4 p-4 border d-flex">
          <div>
            <img src='https://placehold.jp/150x150.png' alt='' />
          </div>
          <div className="ml-4">
            <h3>Hikaru Maeshima</h3>
            <p></p>
            <p>
              メディアとしてのインターネット技術に興味を持ち22歳から
              Webプログラミングの勉強を始める。
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

        <div className="mt-4 p-4 border">
          <h3>スキル・経験</h3>
          <Skill {...data.frontend} />
          <Skill {...data.serverside} />
          <Skill {...data.infrastructure} />
        </div>
        <p>
          興味・学習方向
          <br/>
          フロントエンド技術全般、特にSPAやHeadless CMSなどといった既存のWebアプリの軽量化。
          <br/>
          その他、mBaaS, React Nativeも年内に着手したい
          <br/>
        </p>

      </div>
    );
  }
}