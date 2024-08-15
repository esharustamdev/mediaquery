import React, { useState } from 'react'

const Navbar = () => {
  const [toggleBtn, setToggle] = useState(false)
  const toggleFuct = () => {
    setToggle(!toggleBtn)
  }
  return (
    <>
      <div className='navContainer'>
        <div className='navbarIcon' onClick={toggleFuct}>
          <i className='fas fa-bars'></i>
        </div>
        <div className='navLogo'>
          <img src='imges/fullLogo.png' alt='' />
        </div>
        <div className={`navLinks ${toggleBtn ? 'activenavLinks' : ''}`}>
          <div className='crossIcon' onClick={toggleFuct}>
            <i className='fas fa-xmark'></i>
          </div>
          <ul>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Booking Form</a>
            </li>
            <li>
              <a href=''>Aminates</a>
            </li>
            <li>
              <a href=''>Contact</a>
            </li>
          </ul>
        </div>
        <div className='navContact'>
          <div className='nav-contact-box'>
            <i class='fa-solid fa-phone'></i>
            <p>+ 234 2456 2670</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
