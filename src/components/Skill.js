import React from 'react';

const SkillTags = (props) => (
  <ul className="skill__tag">
    {props.tags.map((skill) =>
      <li key={skill}>{skill}</li>
    )}
  </ul>
)

function Content(props) {
  let vaunt = null
  if (props.titleEn === "Design") {
    vaunt = (
      <>
        Qreate(自分のサイト)でAdobeツールの使い方を書いたりすることもあります。
        <a href='https://www.qreators.net/design/71' target='_blank'>
          → 例
        </a>
      </>
    );
  }
  console.log(props.titleEn)
  return(
    <p className="skill__content">
      {props.content.map(content =>
        <>{content}<br /></>
      )}
      {vaunt}
    </p>
  )
}

export default class Skill extends React.Component {
  render () {
    return(
      <div className="skill">
        <h4 className="skill__title"><span className="skill__title-decoration">█</span>{this.props.title}</h4>
        <SkillTags tags={this.props.tags} />
        <Content content={this.props.content} titleEn={this.props.title_en} />
      </div>
    )
  }
}
