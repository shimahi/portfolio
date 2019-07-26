import React from 'react';
import ReactDOM from 'react-dom';


export default class Tags extends React.Component {
  render () {
    const listItems = this.props.skills.map((skill) =>
      <li>{skill}</li>
    );
    return(
      <ul>
        {listItems}
      </ul>
    );
  }
}