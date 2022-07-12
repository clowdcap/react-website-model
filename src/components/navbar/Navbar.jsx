import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../button/Button'
import './navbar.css'

const Navbar = () => {
  
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 1150 ) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
      <nav className="navbar">
          <div className="navbar__container">
            <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
              Logo <i className="fab fa-typo3"></i>
            </Link>
            
            <div className="menu__icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

            <ul className={click ? 'nav__menu active' : 'nav__menu'}>
              <li className="nav__item">
                <Link to='/' className='nav__links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>

              <li className="nav__item">
                <Link to='/services' className='nav__links' onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>

              <li className="nav__item">
                <Link to='/products' className='nav__links' onClick={closeMobileMenu}>
                  Products
                </Link>
              </li>

              <li className="nav__item">
                <Link to='/sign-up' className='nav__links__mobile' onClick={closeMobileMenu}>
                  Sign-Up
                </Link>
              </li>
            </ul>

            {button && <Button buttonStyle="btn__outline">Sing Up</Button>}

          </div>
      </nav>
    </>
  )
} 

export default Navbar