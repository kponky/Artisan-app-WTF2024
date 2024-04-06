import React from 'react'
import '../App.css'
import heropageimg1 from '../assets/Frame 7.png'

const HeroSection = () => {
  return (
    <div className='heroWrapper' id='home'>
    
    <div className='heroText'>
    <h1>Empowering Artisans</h1>
    <p>ArtCorner is more than just a marketplace, it’s your one-stop platform for discounted materials, skill enhancement, networking and direct sales.</p>
  
  <div className='buttons'> 
   <button className='btn' data-type='signup'> Sign up</button>
   <button className='btn' data-type='login'> Login</button>
    </div>
      </div>

      <div className='heroImg'>
      <img src= {heropageimg1}alt='pot moulding'/>
      
      </div>
    </div>
  )
}

export default HeroSection

