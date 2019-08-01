import React from 'react';

const Image = (props) => (
  <div className="product__image">
    <img src={process.env.REACT_APP_IMAGE_PATH + 'image/'+ props.image} alt={props.title}/>
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
      {props.git.includes("private") ? <span>リポジトリ非公開</span> : <a href={props.git} target="_blank" rel="noreferrer noopener">GitHub↗︎</a>}
    </div>
  )
  return (
    <div className="product__assets-property">
      <Tags skills={props.skills} keyParent={props.title} />
      <Git git={props.git} />
    </div>
  )
}

const Link = (props) =>{
  if (props.title == "Biske!") {
    return <a href="https://youtu.be/EypOwCu7e6o" className="product__assets-title__url" target="_blank" rel="noreferrer noopener">デモ動画を見る</a>
  }
  return <a href={props.url} className="product__assets-title__url" target="_blank" rel="noreferrer noopener">{props.url}</a>
}

const Title = (props) => (
  <div className="product__assets-title">
    <h3 className="product__assets-title__title">{props.title}</h3>
    <p className="product__assets-title__subtitle">{props.subtitle}</p>
    <Link title={props.title} url={props.url} />
  </div>
)

const Content = (props) => (
  <p className="product__content">
    {props.content.map((content, i) =>
      <span key={i}>{content}<br /></span>
    )}
  </p>
)

export default class Product extends React.Component {
  render () {
    return(
      <div className="product">
        <Image image={this.props.image} title={this.props.title}/>
        <div className="product__assets">
          <Title title={this.props.title} subtitle={this.props.subtitle} url={this.props.url} />
          <Property
            skills={this.props.skills} keyParent={this.props.title} git={this.props.git}
          />
        </div>
        <Content content={this.props.content} />
      </div>
    );
  }
}

