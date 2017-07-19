// import React from 'react';
// import Link from 'next/link';
// import Head from 'next/head'
// import Footer from '../components/Footer'

// const cssIndexPage = {
//   margin: '0px', 
//   background: '#fafafa'
// }


// function IndexPage() {
//   return (
//     <div style={cssIndexPage}>
//       <h1>
//         Hello World
//       </h1>
//       <Link href="/about">
//         <a>About</a>
//       </Link>
//       <Footer></Footer>
//     </div>
//   );
// }

// export default IndexPage

import React from 'react'
import Page from '../layouts/main'
export default () => (
  <Page>
    <p>my page with global styles!</p>
  </Page>
)