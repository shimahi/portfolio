import React, { Component } from 'react';
import { Col, Card, CardText, CardBody, CardTitle } from 'reactstrap';

export default class Activities extends Component {
  render() {
    return (
      <Col className="red my-4 p-4">
        <h1>Mine</h1>
        <p>つくったもの</p>
        <Card className="mx-2 my-4">
          <CardBody>
            <CardTitle><a href="https://github.com/Akatsuki-py/git-commenter" target="_blank" rel="noreferrer noopener">Git Commenter</a></CardTitle>
            <CardText>わかりやすいGitのコミットメッセージを生成することを目指したジェネレーターです。 Electronを使って作られたデスクトップアプリです。</CardText>
            <CardText>気軽に使える<a href="http://git-commenter.com/" target="_blank" rel="noreferrer noopener">Web版</a>もあります</CardText>
            <CardText>詳しくは<a href="https://github.com/Akatsuki-py/git-commenter" target="_blank" rel="noreferrer noopener">Github</a>や<a href="https://qiita.com/Akatsuki_py/items/eb9c62b6843fb74376cc" target="_blank" rel="noreferrer noopener">Qiita記事</a>を見てください。</CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
}