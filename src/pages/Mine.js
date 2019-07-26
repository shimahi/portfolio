import React from 'react';
import Tags from '../components/Tags';

export default class Mine extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="mt-4 p-4 border d-flex">
          <div>
            <img src='https://placehold.jp/150x150.png' alt='' />
          </div>
          <div className="ml-4">
            <h3>Qreate</h3>
            <Tags skills={["Rails", "Heroku", "Amazon S3"]}/>
            <p>リポジトリ非公開</p>
            <p>
              音楽やデザインなどの創作ノウハウをQiitaのように共有するサービスです。
              所謂「Railsのチュートリアル」でやるようなCRUDの基本を押さえつつ
              Wysiwygエディタでのフォームや、twitterログインといった機能を追加しています。
              現在およそ2000人の登録ユーザーがいます。
            </p>
          </div>
        </div>
        <div className="mt-4 p-4 border d-flex">
          <div>
            <img src='https://placehold.jp/150x150.png' alt='' />
          </div>
          <div className="ml-4">
            <h3>さがん歴史地図</h3>
            <Tags skills={["Rails", "Heroku"]}/>
            <p><a href='https://github.com/paroleise/saga_history' target="_blank">GitHub</a></p>
            <p>
              バンドメンバーであるmochiの卒業制作アプリ
              <br/>
              佐賀県で起こった歴史上の出来事を時代区分ごとに読むことができます。
              <br/>
              フロントエンド・サーバーサイド・リリースに関する作業を担当しました(コンセプト・デザイン・コンテンツはmochi担当)
              <br/>
              Ajax通信でページ要素を書き換えることでロードの高速化を測り、
              また、裏ではCMS環境を構築しており、時代区分や座標を指定して記事を書くと地図上にドットが追加される仕組みになっています。
              残念ながらレスポンシブ対応していないので、PCでご覧ください。
            </p>
          </div>
        </div>

        <div className="mt-4 p-4 border d-flex">
          <div>
            <img src='https://placehold.jp/150x150.png' alt='' />
          </div>
          <div className="ml-4">
            <h3>パチンコ機種カタログwiki(製作中)</h3>
            <Tags skills={["Rails", "Heroku"]}/>
            <p><a href='https://github.com/paroleise/wiki' target="_blank">GitHub</a></p>
            <p>
              名古屋のパチンコ会社に務める友人と企画しているWebサイト(wiki)です。
              <br/>
              「ゲームカタログwiki」のパチンコ版というコンセプトで、パチンコの機種についてまとめ・レビューが見れるサイトを目指しています。
              記事の編集履歴を取得して差分表示したり、Markdown記法とWysiwygを選択できるエディタの導入を予定しています。
            </p>
          </div>
        </div>

        <div className="mt-4 p-4 border d-flex">
          <div>
            <img src='https://placehold.jp/150x150.png' alt='' />
          </div>
          <div className="ml-4">
            <h3>Biske! / Novelty</h3>
            <Tags skills={["Rails", "ConoHa VPS", "ConoHa ObjectStrage", "Stripe", "ThinReports"]} />
            <p><a href='https://github.com/shimahi/novelty' target="_blank">GitHub</a></p>
            <p>
              レーザー加工機による木製ノベルティのオーダーメイドサービス「Biske!」の入稿システム・受注管理システムです。
              データアップローダつきフォームやStripeによるクレジットカード決済システムに加え、
              注文の進捗管理・メール送信・自動料金計算からの伝票PDF作成・
              入稿データのダウンロードができる管理ページを作成しました。
              また、初めてConoHa VPSを導入し、Linuxサーバーでの本番環境構築を行いました。デプロイにはCapistranoを使用しています。
              予算の都合でBiske!は頓挫し、サーバーは止めてしまいましたが、アプリの共通部分は「Novelty」としてリポジトリを公開しています。
            </p>
          </div>
        </div>

      </div>
    );
  }
}