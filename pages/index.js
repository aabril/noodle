import React from 'react'
import Page from '../layouts/main'
import Link from 'next/link'

export default () => (
  <Page>
    <div >
      <h3>Home</h3>
      <Link href="/about">
        <a>Link to About</a>
      </Link>
    </div>
  </Page>
)