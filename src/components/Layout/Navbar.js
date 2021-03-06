import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaMarkdown, FaJsSquare, FaFilePdf } from 'react-icons/fa';
import { VscFile } from 'react-icons/vsc';

const StyledNavbar = styled.nav`
  background-color: #222B33;
  display: flex;
  height: 50px;
  overflow-x: auto;
  padding-left: 50px;
  position: fixed;
  top: 25px; left: 0; right: 0;
  z-index: 9999;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  align-items: center;
  background-color: #222B33;
  color: #4F565D;
  display: flex;
  justify-content: center;
  font-size: .8rem;
  font-weight: 600;
  padding: .5rem 1rem;
  position: relative;
  text-decoration: none;
  white-space: nowrap;

  &.active {
    background-color: #1d252b;
    color: #fff;
  }

  &.active&:after {
    background-color: #00aced;
    content: '';
    height: 2px;
    position: absolute;
    bottom: 0; left: 0; right: 0;
  }
`;

export default function Navbar({ path }) {
  return (
    <StyledNavbar>
      <StyledLink to="/" className={path === '/' && 'active'}>
        <FaMarkdown style={{ marginRight: 5, color: '#1F90FF' }} />
        Preview README.md
      </StyledLink>
      <StyledLink to="/about" className={path === '/about' && 'active'}>
        <FaJsSquare style={{ marginRight: 5, color: '#F7DF1E' }} />
        about.js
      </StyledLink>
      <StyledLink to="/resume" className={path === '/resume' && 'active'}>
        <FaFilePdf style={{ marginRight: 5, color: '#fff' }} />
        resume.pdf
      </StyledLink>
      <StyledLink to="/portfolio" className={path === '/portfolio' && 'active'}>
        <VscFile style={{ marginRight: 5, color: '#fff' }} />
        Extension: Portfolio
      </StyledLink>
    </StyledNavbar>
  );
}
