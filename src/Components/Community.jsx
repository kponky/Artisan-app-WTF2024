import React from 'react'
import { HashLink as Link } from "react-router-hash-link";
import '../styles/community.css'
import people from '../assets/people frame 1.jpg'

const Community = () => {
  return (
    <div className='community-wrapper' id='community'>
      <div className='community-background '>
        {/* Background image */}
        <img src={people} alt="Community" className="background-image" />
        <div className="overlay"></div>
 
        {/* Content */}
        <div className='community-content container'>
          <h3>Join hundreds of artisans on ArtCorner today and take control of your business.</h3>
          <div className='buttons'> 
            <Link to="/signup">
              <button className='btn signup'> Sign up</button>
            </Link>
            <Link to="/login">
              <button className='btn login'> Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community

