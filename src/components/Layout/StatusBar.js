import React from 'react';
import styled from 'styled-components'

const StyledStatusBar = styled.div`
  align-items: center;
  background-color: #1d252b;
  display: flex;
  height: 25px;
  justify-content: space-between;
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 9999;
`

const StyledStatusText = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: .8rem;
  margin: 0;
`

const Dot = styled.div`
  border-radius: 100%;
  height: 12px;
  width: 12px;
`

export default function StatusBar() {
  return (
    <StyledStatusBar>
      <div style={{ display: 'flex' }}>
        <Dot style={{ backgroundColor: 'rgb(237, 89, 74)', marginRight: '.3rem', marginLeft: '.3rem' }} />
        <Dot style={{ backgroundColor: 'rgb(253, 216, 0)', marginRight: '.3rem' }} />
        <Dot style={{ backgroundColor: 'rgb(90, 192, 90)' }} />
      </div>
      <StyledStatusText>- Chris R. Short</StyledStatusText>
      <div></div>
    </StyledStatusBar>
  )
}
