import React from 'react'
import logo from '../assets/Logo.png'
import '../App.css'

const Navbar = () => {
  return (
    <div className='navContainer'>
    <nav>
    <div className='logoWrapper'>
    <img src= {logo}/>
    </div>

  <ul>
  <li> <a href='#' > Home </a> </li>
  <li> <a href='#' > About us </a> </li>
  <li> <a href='#' > Contact us </a> </li>
 </ul>

  <div className='button'>
  <button className='btn' data-type='signup'>Sign up</button>
  </div>

    
    
    </nav>

      
    </div>
  )
}

export default Navbar
