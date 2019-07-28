import React from 'react';

const SkillTags = (props) => (
  <div>
    {props.tags.join(' / ')}
  </div>
)

const Content = (props) => (
  <p>
    {props.content.map(content =>
      <span>{content}<br /></span>
    )}
  </p>
)

export default class Skill extends React.Component {
  render () {
    return(
      <div>
        <h4>{this.props.title}</h4>
        <SkillTags tags={this.props.tags} />
        <Content content={this.props.content} />
      </div>
    )
  }
}
