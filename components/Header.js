/* eslint-disable react/no-danger */
import React from 'react'

export default class extends React.Component {

  static propTypes() {
    return {
      session: React.PropTypes.object.isRequired
    }
  }

  render() {
    return (
      <div className="header">
        <div>header</div>
      </div>
    )
  }

}