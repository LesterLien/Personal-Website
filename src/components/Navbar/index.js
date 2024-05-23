import React from 'react'
import { Nav, NavLink, NavbarContainer, NavLogo, NavItems} from './NavbarStyled'


const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
        </NavLogo>

        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
      
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar