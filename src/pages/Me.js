import React from 'react';

export default class Me extends React.Component {
  render() {
    return (
      <div className="container">
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
          <div>
            <h3>スキル・経験</h3>
            <p>
              フロントエンド
              <br/>
              HTML5 / CSS3 / JavaScript(ES6) / React
              <br/>
              webpack / parcel / gulp / sass
              <br/>
              wordpress / jekyll.rb / Gatsuby
              <br/>
              現職でもサイト請負制作を任されることもあり、静的サイトのコーディングは一通りできます。
              <br/>
              JSはjQueryばかりでしたが、フロントエンド技術の向上のためES6、React、およびビルドツールを集中的に勉強しています。
            </p>
            <p>
              サーバーサイド
              <br/>
              Ruby / PHP
              <br/>
              Ruby on RailsでのWebアプリ開発が業務歴一番長くて得意です。
              <br/>
              PHPは主要フレームワークの開発経験はありませんが、前職でWordpress・EC-CUBEのMAMP環境を触ってました。
              <br/>
            </p>
            <p>
              インフラ(経験例)
              <br/>
              Amazon EC2、ConoHa VPSなどでLinuxサーバー構築 + Capistranoでの自動デプロイ
              <br/>
              github-pages上のReactアプリで、Heroku上のでRailsアプリからAPI取得 + 表示
              <br/>
            </p>
            <p>
              デザイン
              <br/>
              イラレ・フォトショでの簡易的な作図・画像加工は可能です。
            </p>
            <p>
              興味・学習方向
              <br/>
              フロントエンド技術全般、特にSPAやHeadless CMSなどといった既存のWebアプリの軽量化。
              <br/>
              その他、mBaaS, React Nativeも年内に着手したい
              <br/>
            </p>
          </div>
        </div>

      </div>
    );
  }
}