import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaMarkdown, FaCss3, FaHtml5, FaJsSquare } from 'react-icons/fa'

const StyledNavbar = styled.nav`
  display: flex;
  padding-left: 50px;
`;

const StyledLink = styled(Link)`
  align-items: center;
  color: #fff;
  display: flex;
  justify-content: center;
  font-size: .8rem;
  font-weight: 600;
  padding: .5rem 1rem;
  position: relative;
  text-decoration: none;

  &.active {
    background-color: #1d252b;
  }

  &.active&:after {
    background-color: #00aced;
    content: '';
    height: 2px;
    position: absolute;
    bottom: 0; left: 0; right: 0;
  }
`

export default function Navbar({ path }) {
  console.log(path)

  return (
    <StyledNavbar>
      <StyledLink to="/" className={path === '/' && 'active'}>
        <FaMarkdown style={{ marginRight: 5 }} />
        Preview README.md
      </StyledLink>
      <StyledLink to="/about" className={path === '/about' && 'active'}>
        <FaJsSquare style={{ marginRight: 5 }} />
        about.js
      </StyledLink>
    </StyledNavbar>
  )
}
