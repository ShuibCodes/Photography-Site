import React, { useEffect, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import logo from '../../images2/travellingsudania-white-JPEG.jpg'
import './navbar.css';

import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavIcon,
  NavItem,
  NavLogo,
  NavMenu,
  NavLinks
} from "./NavbarElements"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: "#141414" }}>
        <Nav active={scroll} click={click}>
          <NavbarContainer>
          <IconContext.Provider value={{size:'50px'}}>
          <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              <img className="TSlogo" src={logo} alt="logo" ></img>
            </NavLogo>
          </IconContext.Provider>
          
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/"> Home </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/Images"> Travel</NavLinks>
              </NavItem>
              <NavItem>
              <NavLinks to="/Portraits" >Portraits </NavLinks>
              </NavItem>
              <NavItem>
              <NavLinks to="/Contact" > Contact </NavLinks>
              </NavItem>
              <NavItem>
              <NavLinks to="/Projects" > Projects </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
