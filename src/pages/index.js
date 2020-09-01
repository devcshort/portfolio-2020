import React from 'react'

import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <div>
    <SEO title="Chris R. Short" />
      <div style={{ maxWidth: `200px`, marginLeft: 'auto', marginRight: 'auto', marginBottom: `1.45rem`, borderRadius: '100%', overflow: 'hidden' }}>
        <Image />
      </div>
      <h1 style={{ textAlign: 'center' }}>Chris R. Short</h1>
      <h3 style={{ textAlign: 'center' }}>Software Developer</h3>
  </div>
)

export default IndexPage
