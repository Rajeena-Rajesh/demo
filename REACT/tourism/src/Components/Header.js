import React from 'react'

function Header() {
  return (
    <header className='header'>
      <div className="left-side">LOGO</div>
      <div className="right-side">
          <ul className='nav'>
              <li><a href="">ABOUT</a></li>
              <li><a href="">HOME</a></li>
              <li><a href="">CONTACT</a></li>
          </ul>
      </div>

    </header>
  )
}

export default Header
