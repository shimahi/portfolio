import React from 'react';

const Title = (props) => <h3>{props.title}</h3>

const Image = (props) => (
  <div>
    <img src={props.image} alt={props.title}/>
  </div>
)

const Tags = (props) => {
  const skillList = props.skills.map((skill) =>
    <li key={skill + props.keyParent}>{skill}</li>
  )
  return <ul>{skillList}</ul>
}

const Git = (props) => (
  props.git.includes("private") ? <p>リポジトリ非公開</p> : <p><a href={props.git} target="_blank" rel="noreferrer noopener">GitHub</a></p>
)

const Content = (props) => (
  <p>
    {props.content.map(content =>
      <span>{content}<br /></span>
    )}
  </p>
)

export default class Product extends React.Component {
  render () {
    return(
      <div>
        <div className="mt-4 p-4 border d-flex">
          <Image image={this.props.image} title={this.props.title} />
          <div className="ml-4">
            <Title title={this.props.title} />
            <Tags skills={this.props.skills} keyParent={this.props.title} />
            <Git git={this.props.git}/>
            <Content content={this.props.content} />
          </div>
        </div>
      </div>
    );
  }
}

