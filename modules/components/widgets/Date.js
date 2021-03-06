import React, { Component, PropTypes } from 'react';

export default class Date extends Component {
  static propTypes = {
    setValue: PropTypes.func.isRequired,
    delta: PropTypes.number.isRequired
  }

  handleChange() {
    const node = React.findDOMNode(this.refs.date);
    this.props.setValue(node.value);
  }

  render() {
    return (
      <input autoFocus={this.props.delta === 0} type="month" ref="date" value={this.props.value} onChange={this.handleChange.bind(this)} />
    );
  }
}
