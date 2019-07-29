import React from 'react';

const Image = (props) => (
  <div className="product__image">
    <img src={process.env.REACT_APP_IMAGE_PATH + 'image/'+ props.image} alt={props.title}/>
    <a href={props.url}>{props.url}</a>
  </div>
)

function Property(props) {
  const Tags = (props) => {
    const skillList = props.skills.map((skill) =>
      <li key={skill + props.keyParent}>{skill}</li>
    )
    return <ul className="product__assets-property__skills">{skillList}</ul>
  }
  const Git = (props) => (
    <div className="product__assets-property__git">
      {props.git.includes("private") ? "リポジトリ非公開" : <a href={props.git} target="_blank" rel="noreferrer noopener">GitHub↗︎</a>}
    </div>
  )
  return (
    <div className="product__assets-property">
      <Tags skills={props.skills} keyParent={props.title} />
      <Git git={props.git} />
    </div>
  )
}

const Title = (props) => (
  <div className="product__assets-title">
    <h3 className="product__assets-title__title">{props.title}</h3>
    <p className="product__assets-title__subtitle">{props.subtitle}</p>
  </div>
)

const Content = (props) => (
  <p className="product__content">
    {props.content.map(content =>
      <>{content}<br /></>
    )}
  </p>
)

export default class Product extends React.Component {
  render () {
    return(
      <div className="product">
        <Image image={this.props.image} title={this.props.title} url={this.props.url}/>
        <div className="product__assets">
          <Title title={this.props.title} subtitle={this.props.subtitle} />
          <Property
            skills={this.props.skills} keyParent={this.props.title} git={this.props.git}
          />
        </div>
        <Content content={this.props.content} />
      </div>
    );
  }
}

