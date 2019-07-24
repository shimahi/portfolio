import React, { Component } from 'react';
import { Col } from 'reactstrap';

export default class Me extends Component {
  render() {
    return (
      <Col className="green mt-4 p-4">
        <h1>Welcome!</h1>
        <div className="green-border mt-4 p-4">
          <p>活動の記録・成果物をまとめたものです。</p>
          <p>Activitiesでや自分の制作物や自分が執筆した記事をまとめています。</p>
          <p>ぼちぼち更新予定です。</p>
          <div>
            Contact
            <ul>
              <li className="my-1"><a href="https://twitter.com/akatsuki_py" target="_blank" rel="noreferrer noopener">Twitter</a></li>
              <li className="my-1"><a href="https://qiita.com/Akatsuki_py" target="_blank" rel="noreferrer noopener">Qiita</a></li>
              <li className="my-1"><a href="https://github.com/Akatsuki-py" target="_blank" rel="noreferrer noopener">Github</a></li>
            </ul>
          </div>
        </div>

      </Col>
    );
  }
}