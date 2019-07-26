import React from 'react';
import Product from '../components/Product';
import '../data/products.json'

export default class Mine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qreate: {
        title: "Qreate",
        image: "https://placehold.jp/150x150.png",
        skills: ["Rails", "Heroku", "Amazon S3"],
        git: "private",
        content: [
          "音楽やデザインなどの創作ノウハウをQiitaのように共有するサービスです。",
          <br/>,
          "所謂「Railsのチュートリアル」でやるようなCRUDの基本を押さえつつWysiwygエディタでのフォームや、\
          twitterログインといった機能を追加しています。\
          現在およそ2000人の登録ユーザーがいます。"
        ]
      },
      saga: {
        title: "さがん歴史地図",
        image: "https://placehold.jp/150x150.png",
        skills: ["Rails", "Heroku"],
        git: "https://github.com/paroleise/saga_history",
        content: [
          "バンドメンバーであるmochiの卒業制作アプリ",
          <br/>,
          "佐賀県で起こった歴史上の出来事を時代区分ごとに読むことができます。",
          <br/>,
          "フロントエンド・サーバーサイド・リリースに関する作業を担当しました(コンセプト・デザイン・コンテンツはmochi担当)",
          <br/>,
          "Ajax通信でページ要素を書き換えることでロードの高速化を測り、 \
          また、裏ではCMS環境を構築しており、時代区分や座標を指定して記事を書くと地図上にドットが追加される仕組みになっています。\
          残念ながらレスポンシブ対応していないので、PCでご覧ください。"
        ]
      },
      pachiwiki: {
        title: "パチンコ機種カタログwiki(製作中)",
        image: "https://placehold.jp/150x150.png",
        skills: ["Rails", "Heroku"],
        git: "https://github.com/paroleise/wiki",
        content: [
          "名古屋のパチンコ会社に務める友人と企画しているWebサイト(wiki)です。",
          <br/>,
          "「ゲームカタログwiki」のパチンコ版というコンセプトで、パチンコの機種についてまとめ・レビューが見れるサイトを目指しています。\
          記事の編集履歴を取得して差分表示したり、Markdown記法とWysiwygを選択できるエディタの導入を予定しています。",
        ]
      },
      biske: {
        title: "Biske! / Novelty",
        image: "https://placehold.jp/150x150.png",
        skills: ["Rails", "ConoHa VPS", "ConoHa ObjectStrage", "Stripe", "ThinReports"],
        git: "https://github.com/shimahi/novelty",
        content: [
          "レーザー加工機による木製ノベルティのオーダーメイドサービス「Biske!」の入稿システム・受注管理システムです。\
          データアップローダつきフォームやStripeによるクレジットカード決済システムに加え、\
          注文の進捗管理・メール送信・自動料金計算からの伝票PDF作成・\
          入稿データのダウンロードができる管理ページを作成しました。\
          また、初めてConoHa VPSを導入し、Linuxサーバーでの本番環境構築を行いました。デプロイにはCapistranoを使用しています。\
          予算の都合でBiske!は頓挫し、サーバーは止めてしまいましたが、アプリの共通部分は「Novelty」としてリポジトリを公開しています。(wiki)です。"
        ]
      }
    }
  }

  render() {
    return (
      <div className="container">
        <Product {...this.state.qreate} />
        <Product {...this.state.saga} />
        <Product {...this.state.pachiwiki} />
        <Product {...this.state.biske} />
      </div>
    );
  }
}