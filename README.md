しまひのポートフォリオサイト  
node.js v11.10.0  

# 環境構築  
パッケージインストール → `npm i` または `yarn install`  
ローカルサーバー立ち上げ → `npm run start` または `yarn start`  
ビルド → `npm run build` または `yarn build`  
デプロイ → `npm run deploy` または `yarn deploy`  

# 画像ファイルについて  
ローカルサーバーではsrc/index.jsからの相対パスで画像を取得しているが、本番環境ではindex.htmlからの相対パスで画像を取得する必要がある。
なので、 `.env` と `.env.production` で環境変数(REACT_APP_IMAGE_PATH)に異なる値を渡し、ファイルパスのパス指定は環境変数で行う。