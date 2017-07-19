/* eslint-disable react/no-danger */
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Package from '../package'

const footerStyle = {
    position: 'fixed',
    bottom: 0,
    left: '50%',
    marginLeft: '-80px', /*negative half the width */
    width: '160px',
    height: '60px'
}


export default class extends React.Component {

  static propTypes() {
    return {
      session: React.PropTypes.object.isRequired
    }
  }

  render() {
    return (
      <div className="footer" style={footerStyle}>
        <h6>Crafted with ❤️  &nbsp;by <a href="http://albertabril.com">Albert Abril</a></h6>
      </div>
    )
  }

}