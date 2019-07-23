import React, { Component } from 'react';
import { Col, Card, CardText, CardBody, CardTitle } from 'reactstrap';

export default class Activities extends Component {
    render() {
        return (
            <Col className="red my-4 p-4">
                <h1>Activities</h1>

                <Card className="mx-2 my-4">
                    <CardBody>
                        <CardTitle>Akatsuki Portfolio</CardTitle>
                        <CardText>このポートフォリオです。活動の記録をしていくために作成しました。</CardText>
                        <CardText>フレームワークにReactを使って作成しました。</CardText>
                    </CardBody>
                </Card>

                <Card className="mx-2 my-4">
                    <CardBody>
                        <CardTitle><a href="https://github.com/Akatsuki-py/git-commenter" target="_blank" rel="noreferrer noopener">Git Commenter</a></CardTitle>
                        <CardText>わかりやすいGitのコミットメッセージを生成することを目指したジェネレーターです。 Electronを使って作られたデスクトップアプリです。</CardText>
                        <CardText>気軽に使える<a href="http://git-commenter.com/" target="_blank" rel="noreferrer noopener">Web版</a>もあります</CardText>
                        <CardText>詳しくは<a href="https://github.com/Akatsuki-py/git-commenter" target="_blank" rel="noreferrer noopener">Github</a>や<a href="https://qiita.com/Akatsuki_py/items/eb9c62b6843fb74376cc" target="_blank" rel="noreferrer noopener">Qiita記事</a>を見てください。</CardText>
                    </CardBody>
                </Card>

                <Card className="mx-2 my-4">
                    <CardBody>
                        <CardTitle><a href="https://github.com/Akatsuki-py/akatsuki-os" target="_blank" rel="noreferrer noopener">Akatsuki OS</a></CardTitle>
                        <CardText>現在開発中の自作OSです。かわいい。</CardText>
                    </CardBody>
                </Card>

                <Card className="mx-2 my-4">
                    <CardBody>
                        <CardTitle><a href="https://github.com/Akatsuki-py/scatterx" target="_blank" rel="noreferrer noopener">scatterx</a></CardTitle>
                        <CardText>ScatterJSをラップしたnpmパッケージです。Scatterを使ったトランザクションの送信などを直感的なAPIコールでできるようにしました。</CardText>
                        <CardText>他にもコントラクトのテーブル取得APIなど、EOSのノードリスト取得APIなど、便利なAPIを用意しました。</CardText>
                        <CardText>ソースコードは<a href="https://github.com/Akatsuki-py/scatterx" target="_blank" rel="noreferrer noopener">Github</a>にあります。自由に利用可能です。</CardText>
                    </CardBody>
                </Card>

                <Card className="mx-2 my-4">
                    <CardBody>
                        <CardTitle><a href="https://akatsuki-py.github.io/i386-browser-emulator/docs/" target="_blank" rel="noreferrer noopener">i386 browser emulator</a></CardTitle>
                        <CardText>『自作エミュレータで学ぶX86アーキテクチャ コンピュータが動く仕組みを徹底理解！』で作成するi386のCPUエミュレータをブラウザ上で実装したものです。</CardText>
                        <CardText>x86のエミュレータという名前ではありますが、あくまでx86本で作るエミュレータをブラウザ上で作ったものなので動かない命令もたくさんあります。(本にない命令で自分が実装したいなと思ったものはいくつか実装してあります。)</CardText>
                    </CardBody>
                </Card>

                <Card className="mx-2 my-4">
                    <CardBody>
                        <CardTitle><a href="https://chrome.google.com/webstore/detail/ethereum-domain-blocker/dbhnocmhkigempchmnihkcfjnbfdhjjm" target="_blank" rel="noreferrer noopener">Ethereum Domain Blocker</a></CardTitle>
                        <CardText>Ethereum上のブラックリストにURLを登録、参照することができるChrome拡張です。</CardText>
                        <CardText>ブラックリストに載っているURLはGoogle検索の結果から表示されなくなります。</CardText>
                        <CardText>ブラックリストはパブリックなEthereum上にあるためブラックリストの共有が簡単に行えます。</CardText>
                        <CardText>詳しくは<a href="https://github.com/Akatsuki-py/ethereum-domain-blocker" target="_blank" rel="noreferrer noopener">Github</a>や<a href="https://qiita.com/Akatsuki_py/items/513e688997632edcea48" target="_blank" rel="noreferrer noopener">Qiita記事</a>やChromeストアの説明を見てください。</CardText>
                    </CardBody>
                </Card>

                <Card className="mx-2 my-4">
                    <CardBody>
                        <CardTitle><a href="https://github.com/Akatsuki-py/my-bash-cmd" target="_blank" rel="noreferrer noopener">my-bash-cmd</a></CardTitle>
                        <CardText>Cで書いた自作のbash用コマンドです。</CardText>
                        <CardText>自分が欲しいなと思ったコマンドをいくつか実装しました。</CardText>
                    </CardBody>
                </Card>

                <Card className="mx-2 my-4">
                    <CardBody>
                        <CardTitle><a href="https://github.com/Akatsuki-py/pixiv_downloader" target="_blank" rel="noreferrer noopener">pixiv_downloader</a></CardTitle>
                        <CardText>Pythonで書いたPixivの特定の絵師さんのイラストを自動でダウンロードするプログラムです。タグでフィルターもかけられます。</CardText>
                    </CardBody>
                </Card>

            </Col>
        );
    }
}