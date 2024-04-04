import React from 'react'
import logo from '../assets/Logo.png'
import '../App.css'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <div className='navContainer'>
    <nav>
    <div className='logoWrapper'>
    <img src= {logo}/>
    </div>

  <ul>
  <li>  <Link smooth to = '#'>Home</Link> </li>
  <li>  <Link  smooth to = '#aboutus'>About</Link> </li>
  <li>  <Link  smooth to = '#offer'> Offer</Link> </li>
  <li>  <Link  smooth to = '#testimonial'> Testimonials</Link> </li>
  <li>  <Link  smooth to = '#community'> Community</Link> </li>
  <li>  <Link  smooth to = '#footer'>Contact us</Link> </li>
 
 </ul>

  <div className='button'>
  <button className='btn' data-type='signup'>Sign up</button>
  </div>

    
    
    </nav>

      
    </div>
  )
}

export default Navbar


