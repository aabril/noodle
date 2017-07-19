import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const cssMain = {
  background: '#f2f2f2',
  height: '100vh'
}

export default ({ children }) => (
  <div style={cssMain}>
  <Head>
    <style>
    @import 'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css'
    </style>
  </Head>

    <Header />
    { children }
    <Footer />
  </div>
)