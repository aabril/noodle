import React from 'react';
import Link from 'next/link';
import Head from 'next/head'
import Footer from '../components/Footer'
import 'glamor/reset'

function IndexPage() {
  return (
    <div style={IndexPageStyle}>
      <h1>
        Hello World
      </h1>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Footer></Footer>
    </div>
  );
}

export default IndexPage