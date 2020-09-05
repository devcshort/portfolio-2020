import React from 'react';

import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <div>
    <SEO title="Preview README.md" />
    <div style={{ maxWidth: '200px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '1.45rem', borderRadius: '100%', overflow: 'hidden' }}>
      <Image />
    </div>
    <h1 style={{ textAlign: 'center' }}>Chris R. Short</h1>
    <h3 style={{ textAlign: 'center' }}>Front-End Developer</h3>
    <p
      style={{
        maxWidth: 600,
        margin: '0 auto',
        textAlign: 'center',
        fontSize: '1.1rem',
        fontWeight: 600
      }}
    >
      Throughout my career I have worked with multiple frameworks, languages, and cloud computing platforms used in the creation of customer facing applications. This has been anything from progressive web apps with ReactJS to Android applications integrated with <a href="https://www.zebra.com/us/en.html" target="_blank" rel="noopener noreferrer">Zebra</a> hardware, and everything in between. My most recent projects have utilized Amazon Web Services for infrastructure and I found myself falling in love with building serverless applications. My ideal role is working somewhere that I can contribute my education, knowledge, and leadership in solving complex problems.
    </p>
  </div>
);

export default IndexPage;
