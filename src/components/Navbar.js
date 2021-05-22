import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            AeroProbe
            {/* <i class='fab fa-typo3' /> */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to='/viewPastData'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                View Past Data
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                to='/ViewUsers'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                View Users
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to='/FAQ_1'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/adminLogin'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Admin Login
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/SignUp'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/About'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
             </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                to='/calc'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                calc
             </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
