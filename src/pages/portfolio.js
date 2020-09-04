import React from 'react'
import { VscCloudDownload, VscStarFull, VscStarHalf } from 'react-icons/vsc'

import PortfolioIcon from '../components/portfolio-icon'
import NpmjsImage from '../components/npmjs-image'
import StrobelightImage from '../components/strobelight-image'
import StackoverflowImage from '../components/stackoverflow-image'
import SEO from '../components/seo'

const Divider = ({ style }) => <div style={{ marginRight: 10, ...style }}>|</div>;

export default function Portfolio() {
  return (
    <div>
      <SEO title="Extension: Portfolio" />
      <div style={{
        display: 'flex',
        marginBottom: '1rem'
      }}>
        <div style={{
          height: 128,
          width: 128,
          marginRight: 10
        }}>
          <PortfolioIcon />
        </div>
        <div style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          <div>
            <h1 style={{ margin: 0 }}>Portfolio</h1>
          </div>
          <div style={{ display: 'flex' }}>
            <p style={{ marginRight: 10, marginBottom: 0, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'  }}>Chris R. Short</p>
            <Divider />
            <p style={{ display: 'flex', alignItems: 'center', marginBottom: 0, marginRight: 10, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'  }}><VscCloudDownload style={{ marginRight: 5 }} /> 1,325,623</p>
            <Divider />
            <div style={{ alignItems: 'center', display: 'flex' }}>
              <VscStarFull style={{ color: '#ff8e00' }} />
              <VscStarFull style={{ color: '#ff8e00' }} />
              <VscStarFull style={{ color: '#ff8e00' }} />
              <VscStarFull style={{ color: '#ff8e00' }} />
              <VscStarHalf style={{ color: '#ff8e00' }} />
            </div>
            <Divider />
            <p style={{ margin: 0 }}>v0.0.1</p>
          </div>
          <div>
            <p style={{ margin: 0, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}><small>Unfortunately most of my projects are private within the company I work for currently, but you can find my public work here <span role="img" aria-label="Smiling Face">🙂</span> </small></p>
          </div>
        </div>
      </div>
      <div>
        <p style={{
          textDecoration: 'underline',
          marginBottom: '.2rem',
          fontWeight: 600,
          paddingLeft: '1rem',
          paddingRight: '1rem'
        }}><small>Details</small></p>
        <hr style={{ background: 'hsla(0,0%,53%,.45)' }} />
      </div>
      <div style={{ margin: '0 auto', width: '100%', maxWidth: 960 }}>
        <div style={{ display: 'flex', marginBottom: '1rem', padding: '1rem', boxShadow: '1px 1px 11px rgba(0,0,0, 0.8)' }}>
          <div style={{ width: 150, height: 150, marginRight: 10 }}>
            <NpmjsImage />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: 0 }}>react-hls-player</h3>
            <p style={{ margin: 0, fontWeight: 600, fontSize: '.8rem' }}>NPM Package</p>
            <p style={{ fontSize: '1rem', marginBottom: '.5rem' }}>React HLS Player was a project that had been abandoned and had some really weird bugs that wouldn't work for my project. So, I forked the project, fixed the bugs, and pushed for others to use. Since them I've implemented the fixes for all of the issues that were created for the original package and have decided to support it long term.</p>
            <div style={{ display: 'flex' }}>
              <p style={{ margin: 0, marginRight: '1rem' }}><a href="https://www.npmjs.com/package/react-hls-player" target="_blank" rel="noopener noreferrer">View Package</a></p>
              <p style={{ margin: 0 }}><a href="https://github.com/devcshort/react-hls" target="_blank" rel="noopener noreferrer">View Source</a></p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', marginBottom: '1rem', padding: '1rem', boxShadow: '2px 2px 11px rgba(0,0,0, 0.8)' }}>
          <div style={{ width: 150, height: 150, marginRight: 10 }}>
            <StrobelightImage />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: 0 }}>Strobe Light (Ad Free)</h3>
            <p style={{ margin: 0, fontWeight: 600, fontSize: '.8rem' }}>Android App</p>
            <p style={{ fontSize: '1rem', marginBottom: '.5rem' }}>This app was originally written in React Native to test the waters and figure out how to take an app from nothing all the way to deployed to the app store. Over the course of a year the app was installed on over 10,000 devices and I decided to rewrite and redesign the app using Flutter. Since then it has contined to become downloaded on more devices and gain quite a few reviews.</p>
            <p style={{ margin: 0 }}><a href="https://play.google.com/store/apps/details?id=com.chrisrshort.strobelight&hl=en_US" target="_blank" rel="noopener noreferrer">View in the Play Store</a></p>
          </div>
        </div>

        <div style={{ display: 'flex', padding: '1rem', boxShadow: '2px 2px 11px rgba(0,0,0, 0.8)' }}>
          <div style={{ width: 150, height: 150, marginRight: 10 }}>
            <StackoverflowImage />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: 0 }}>StackInbox</h3>
            <p style={{ margin: 0, fontWeight: 600, fontSize: '.8rem' }}>Chrome Extension</p>
            <p style={{ fontSize: '1rem', marginBottom: '.5rem' }}>I got tired of having to keep an extra tab open just to watch over my Stack Overflow inbox for new notifications, so I built this extension to not only let me view my Stack Overflow inbox, but also show a notification icon when I have an unread message. I deployed it to the Chrome Store in case anyone else runs in to the same issues I do.</p>
            <div style={{ display: 'flex' }}>
              <p style={{ margin: 0, marginRight: '1rem' }}><a href="https://chrome.google.com/webstore/detail/stackinbox/fphiplmebgimlmpikocgkdffkmmenmha" target="_blank" rel="noopener noreferrer">View in the Chrome Store</a></p>
              <p style={{ margin: 0 }}><a href="https://github.com/devcshort/stack-inbox" target="_blank" rel="noopener noreferrer">View Source</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
