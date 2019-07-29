import React from 'react';

const Title = (props) => <h3 className="product__title">{props.title}</h3>

const Image = (props) => (
  <div className="product__image">
    <img src={props.image} alt={props.title}/>
  </div>
)

const Tags = (props) => {
  const skillList = props.skills.map((skill) =>
    <li key={skill + props.keyParent}>{skill}</li>
  )
  return <ul className="product__skills">{skillList}</ul>
}

const Git = (props) => (
  <div className="product__git">
    {props.git.includes("private") ? "リポジトリ非公開" : <p><a href={props.git} target="_blank" rel="noreferrer noopener">GitHub</a></p>}
  </div>

)

const Content = (props) => (
  <p className="product__content">
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

