import React, { Component } from 'react';
import { Col, Card, CardText, CardBody, CardTitle } from 'reactstrap';

export default class Skill extends Component {
    render() {

        return (
            <Col className="lightblue my-4 p-4">
                <h1>Skill</h1>

                <Card className="mx-2 my-4">
                    <CardBody>
                        <CardTitle>Python</CardTitle>
                        <CardText>数値計算、サーバーサイド、個人開発、Webスクレイピングなど、最もよく使っている言語です。</CardText>
                    </CardBody>
                </Card>

                <Card className="mx-2 my-4">
                    <CardBody>
                        <CardTitle>JavaScript</CardTitle>
                        <CardText>クライアントサイド制作で主に使用しています。Pythonの次に使っています</CardText>
                        <CardText>npmパッケージも制作経験があります。詳しくはActivitiesを見てください。</CardText>
                        <CardText>使用経験のある主なライブラリ・フレームワークはReact、Redux、Babel、Webpack、Electronです。</CardText>
                    </CardBody>
                </Card>

                <Card className="mx-2 my-4">
                    <CardBody>
                        <CardTitle>AWS</CardTitle>
                        <CardText>主にAPI gateway、Lambda、DynamoDB、S3、EC2を使っています。</CardText>
                    </CardBody>
                </Card>

                <Card className="mx-2 my-4">
                    <CardBody>
                        <CardTitle>C</CardTitle>
                        <CardText>Cは僕自身が低レイヤー(主にOS)に興味があるので、UNIXなどのOSのコードを読んだりするので使っています。</CardText>
                        <CardText>OSのソースコードは効率化の塊みたいなコード、データ構造ばかりなので読んでいて面白いです。</CardText>
                        <CardText>最近はOSの自作で書いたり読んだりしてます。</CardText>
                    </CardBody>
                </Card>

                <Card className="mx-2 my-4">
                    <CardBody>
                        <CardTitle>Linux・Shell</CardTitle>
                        <CardText>普段Xubuntu使ったりEC2使ったりで結構触っています。</CardText>
                    </CardBody>
                </Card>

                <Card className="mx-2 my-4">
                    <CardBody>
                        <CardTitle>HTML&CSS</CardTitle>
                        <CardText>クライアントサイド制作で使用しています。</CardText>
                    </CardBody>
                </Card>

            </Col>
        );
    }
}