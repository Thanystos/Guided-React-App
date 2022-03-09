import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, NavIcon, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks, 
  NavItemBtn, 
  NavBtnLink } 
  from './Navbar.elements'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  // ShowButton va modifier la valeur de button en fonction de la taille de l'écran
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    }
    else {
      setButton(true)
    }
  }

  // À chaque render de la page on déclenche showButton
  useEffect(() => {
    showButton()
  }, [])

  // On déclenche aussi showButton quand on essaie de changer la taille de la fenêtre
  window.addEventListener('resize', showButton)

  return (
    <>
      {/* Ici le provider va offrir son paramètre à tous les enfants qu'il englobe et qui sont des Icon de react-icons */}
      <IconContext.Provider value={{color: '#fff'}}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon />
                ULTRA
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            {/* On offre à notre NavMenu la valeur de click, ainsi ce dernier pourra être utilisé dans le CSS */}
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/services">
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products">
                  Products
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/sign-up">
                    {/* On fournit à nouveau des paramètres qui manipuleront le CSS */}
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                    <NavBtnLink to="/sign-up">
                      <Button fontBig primary>
                        SIGN UP
                      </Button>
                    </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>   
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar