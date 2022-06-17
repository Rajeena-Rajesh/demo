import React from 'react'
import './Navbar.css'
import {BrowserRouter as Router,Router} from 'react-router-dom'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="left-side">
       <img src="https://media.istockphoto.com/photos/assorted-indian-dish-picture-id868408746" alt="logo" />
     </div>
     <div className="right-side">
         <Link to='/'>Home</Link>
         <Link to='/'>About</Link>
         <Link to='/'>Menu</Link>
         <Link to='/'>Contact</Link>
     </div>
    </div>
  )
} 

export default Navbar
