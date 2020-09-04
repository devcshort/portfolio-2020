import React from 'react';

import resume from '../assets/resume.pdf';
import SEO from '../components/seo';

export default function Resume() {
  return (
    <>
      <SEO title="resume.pdf" />
      <object
        type="application/pdf"
        data={resume}
        width="100%"
        style={{ height: 'calc(100vh - 95px)' }}
      >
        <a href={resume} target="_blank" rel="noopener noreferrer">My Resume</a>
      </object>
    </>
  );
}
