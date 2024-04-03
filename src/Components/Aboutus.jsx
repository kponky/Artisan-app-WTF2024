import React from 'react'
import '../App.css'
import aboutUsImg from '../assets/Frame 8.png'

const Aboutus = () => {
  return (
    <div className='aboutUsWrapper'>
    <section className='p-top'>
    <div className='aboutus-text'>
    <h2> About Us</h2>
    <p>We are dedicated to empowering artisans like you. Our platform is designed to provide you with the resources you need to excel in your craft!</p>   
    </div>
    </section>
    
    <div className='aboutImg'>
    <img src= {aboutUsImg} alt='black woman with afro in a peach gym wear'/>
    
    </div>
   
   
    
    </div>

    
  )
}

export default Aboutus
