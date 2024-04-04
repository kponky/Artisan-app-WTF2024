import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Aboutus from './Components/Aboutus'
import Offer from './Components/Offer'
import Testiminial from './Components/Testiminial'
import Community from './Components/Community'
import Footer from './Components/Footer'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <Router>

    <Navbar/>
    <Routes>
    <Route path='/' element ={<HeroSection/>} />
    <Route path='/aboutus' element ={<Aboutus/>} />
    <Route path='/offer' element ={<Offer/>} />
    <Route path='/testimonial' element ={<Testiminial/>} />
    <Route path='/community' element ={<Community/>} />
    <Route path='/footer' element ={<footer/>} />

    
    </Routes>

    
   

    </Router>
  )
}

export default App
// <HeroSection/>
// <Aboutus/>
// <Offer/>
// <Footer/>