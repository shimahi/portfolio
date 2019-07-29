import React from 'react';

const SkillTags = (props) => (
  <ul className="skill-tag">
      {props.tags.map((skill) =>
        <li key={skill}>{skill}</li>)}
  </ul>
)

const Content = (props) => (
  <p>
    {props.content.map(content =>
      <>{content}<br /></>
    )}
  </p>
)

export default class Skill extends React.Component {
  render () {
    return(
      <div className="skill">
        <h4>{this.props.title}</h4>
        <SkillTags tags={this.props.tags} />
        <Content content={this.props.content} />
      </div>
    )
  }
}
