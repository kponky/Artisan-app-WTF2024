import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Aboutus from './Components/Aboutus'
import Offer from './Components/Offer'
import Testiminial from './Components/Testiminial'
import Community from './Components/Community'
import Footer from './Components/Footer'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
// import { Link } from 'react-router-dom'

function App() {

  return (
    <Router>

   <Link to= '#' smooth ></Link>
   <Link to= '#aboutus' smooth ></Link>
   <Link to= '#offer' smooth ></Link>
   <Link to= '#community' smooth ></Link>
<Navbar/>
<HeroSection/>
<Aboutus/>
<Offer/>
<Testiminial/>  
<Community/>
<Footer/> 
   

    </Router>
  )
}

export default App
// <HeroSection/>
// <Aboutus/>
// <Offer/>
// <Footer/>

// <Router>

// <Navbar/>
// <Routes>
// <Route path='/' element ={<HeroSection/>} />
// <Route path='/aboutus' element ={<Aboutus/>} />
// <Route path='/offer' element ={<Offer/>} />
// <Route path='/testimonial' element ={<Testiminial/>} />
// <Route path='/community' element ={<Community/>} />
// <Route path='/footer' element ={<footer/>} />

// </Routes>




// </Router>