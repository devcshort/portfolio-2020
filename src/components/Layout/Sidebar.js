import React from 'react'
import styled from 'styled-components'
import { VscFiles, VscSourceControl, VscExtensions } from 'react-icons/vsc'

const StyledSidebar = styled.div`
  background-color: #1d252b;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 25px);
  position: fixed;
  width: 50px;
`

const IconButton = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  height: 50px;
  justify-content: center;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &:after {
    background-color: #00aced;
    content: '';
    display: table;
    position: absolute;
    top: 0; left: 0; bottom: 0;
    width: 2px;
  }
`

const IconLink = styled.a`
  align-items: center;
  color: #444B52;
  display: flex;
  font-size: 1.5rem;
  height: 50px;
  justify-content: center;

  &:hover {
    color: #fff;
  }
`

export default function Sidebar() {
  return (
    <StyledSidebar>
      <IconButton>
        <VscFiles />
      </IconButton>
      <IconLink href="https://github.com/devcshort" target="_blank" rel="noopener noreferrer" title="GitHub">
        <VscSourceControl />
      </IconLink>
      <IconLink href="https://www.npmjs.com/~nightlight" target="_blank" rel="noopener noreferrer" title="Npmjs">
        <VscExtensions />
      </IconLink>
    </StyledSidebar>
  )
}