import React from 'react'

import StatusBar from './StatusBar'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './Layout.css'
import './CodeFormatting.css'

export default function Layout({ children, location }) {
  return (
    <div>
      <StatusBar path={location.pathname} />
      <Sidebar />
      <Navbar path={location.pathname} />
      <main style={{ paddingLeft: 60, paddingTop: 85, paddingRight: 10, overflowY: 'auto'  }}>
        { children }
      </main>
    </div>
  )
}
