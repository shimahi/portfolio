import React from 'react';

function Tags(props) {
  return(
    <ul>
      {/*TODO:key設置でエラー回避*/
        props.skills.map((skill) =>
          <li>{skill}</li>
        )
      }
    </ul>
  );
}

function Git(props) {
  return (
    <p>
      {props.git.includes("private") ? "リポジトリ非公開" : (<a href={props.git} target="_blank" rel="noreferrer noopener">GitHub</a>)}
    </p>
  )
}

export default class Product extends React.Component {
  render () {
    return(
      <div className="container">
        <div className="mt-4 p-4 border d-flex">
          <div>
            <img src={this.props.image} alt={this.props.title}/>
          </div>
          <div className="ml-4">
            <h3>{this.props.title}</h3>
            <Tags skills={this.props.skills} />
            <Git git={this.props.git}/>
            <p>
              {this.props.content}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

