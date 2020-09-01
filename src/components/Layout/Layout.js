import React from 'react'

import StatusBar from './StatusBar'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './Layout.css'

export default function Layout({ children, location }) {
  return (
    <div>
      <StatusBar />
      <Sidebar />
      <Navbar path={location.pathname} />
      <main style={{ paddingLeft: 60, paddingTop: 75, overflowY: 'auto'  }}>
        { children }
      </main>
    </div>
  )
}
