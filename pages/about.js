import React from 'react'
import Page from '../layouts/main'
import Link from 'next/link'

export default () => (
  <Page>
    <div >
      <h3>About</h3>
      <Link href="/">
        <a>back to home</a>
      </Link>
    </div>
  </Page>
)