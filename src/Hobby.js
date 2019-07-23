import React, { Component } from 'react';
import { Col, Card, CardText, CardBody, CardTitle } from 'reactstrap';

//趣味を書いていくコンポーネント
export default class Hobby extends Component {
    render() {
        return (
            <Col className="blue my-4 p-4" >
                <h1>Hobby</h1>

                <Card className="mx-2 my-4">
                    <CardBody>
                        <CardTitle>ゲーム</CardTitle>
                        <CardText>スマブラ、FGO、ポケモン、ディスガイアなどいろんなゲームが好きです。</CardText>
                        <CardText>FGOフレンド募集中です。ID:554864736</CardText>
                    </CardBody>
                </Card>

                <Card className="mx-2 my-4">
                    <CardBody>
                        <CardTitle>Youtube</CardTitle>
                        <CardText>ゲーム配信みたりYoutuberの配信見たりしてます。</CardText>
                        <CardText>YoutuberではHikakinやカズチャンネルが好き。</CardText>
                    </CardBody>
                </Card>

                <Card className="mx-2 my-4">
                    <CardBody>
                        <CardTitle>写真撮影</CardTitle>
                        <CardText>外出したときに何気ない風景をなんとなく撮るのが好きです。秋最高。</CardText>
                    </CardBody>
                </Card>

                <Card className="mx-2 my-4">
                    <CardBody>
                        <CardTitle>低レイヤー</CardTitle>
                        <CardText>OSの仕組みに興味を持っています。最近はLinuxのカーネルについて、元となったUNIXのコードを読んだりしながら勉強したりOSを自作してたりします。</CardText>
                    </CardBody>
                </Card>

                <Card className="mx-2 my-4">
                    <CardBody>
                        <CardTitle>ガジェット系</CardTitle>
                        <CardText>買わないけどスマホやパソコンの新製品情報が出たらとりあえず調べます。</CardText>
                    </CardBody>
                </Card>

            </Col>
        );
    }
}