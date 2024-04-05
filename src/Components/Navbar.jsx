import React, {useState} from 'react'
import logo from '../assets/Logo.png'
import '../App.css'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {

  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) =>{
    setActiveLink(link)
  };
  return (
    <div className='navContainer'>
    <nav>
    <div className='logoWrapper'>
    <img src= {logo}/>
    </div>

  <ul>
  <li>  <Link smooth to = '/' onClick={() => handleLinkClick ('home')} className ={activeLink  === 'home' ? 'active' : ''}> Home </Link> </li>
  <li>  <Link  smooth to = '/#aboutus'  onClick={() => handleLinkClick('about')} className={activeLink === 'about' ? 'active' : ''}>About</Link> </li>
  {/*<li>  <Link  smooth to = '#offer'> </Link> </li>*/}
  {/*<li>  <Link  smooth to = '#testimonial'></Link> </li>  */}
  {/*<li>  <Link  smooth to = '#community'></Link> </li>*/}
  <li>  <Link smooth to = '/contact-us' onClick={() => handleLinkClick('contact-us')} className={activeLink === 'contact-us' ? 'active' : ''}>Contact us</Link> </li>
 
 </ul>

  <div className='button'>
  <button className='btn' data-type='signup'>Sign up</button>
  </div>

    
    
    </nav>

      
    </div>
  )
}

export default Navbar


