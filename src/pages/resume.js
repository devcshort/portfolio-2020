import React from 'react'

import resume from '../assets/resume.pdf'

export default function Resume() {
  return (
    <object
      type="application/pdf"
      data={resume}
      width="100%"
      style={{ height: 'calc(100vh - 95px)' }} />
  )
}
