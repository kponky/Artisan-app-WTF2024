import React from 'react'
import logo from '../assets/Logo.png'
import '../App.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navContainer'>
    <nav>
    <div className='logoWrapper'>
    <img src= {logo}/>
    </div>

  <ul>
  <li>  <Link to= '/'>Home</Link> </li>
  <li>  <Link to= '/aboutus'>About</Link> </li>
  <li>  <Link to= '/offer'> Offer</Link> </li>
  <li>  <Link to= '/testimonial'> Testimonials</Link> </li>
  <li>  <Link to= '/community'> Community</Link> </li>
  <li>  <Link to= '/footer'>Contact us</Link> </li>
 
 </ul>

  <div className='button'>
  <button className='btn' data-type='signup'>Sign up</button>
  </div>

    
    
    </nav>

      
    </div>
  )
}

export default Navbar


