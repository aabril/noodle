import React from 'react'
import LayoutMain from '../layouts/main'
import Link from 'next/link'

export default () => (
  <LayoutMain>
    <div >
      <h3>About</h3>
      <Link href="/">
        <a>back to home</a>
      </Link>
    </div>
  </LayoutMain>
)