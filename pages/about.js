import React from 'react';
import Link from 'next/link';
import Footer from '../components/Footer'

function AboutPage() {
  return (
    <div>
      <h1>
        About page
      </h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <Footer/>
    </div>
  );
}

export default AboutPage;