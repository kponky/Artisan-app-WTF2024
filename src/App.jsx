import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Aboutus from './Components/Aboutus'
import Offer from './Components/Offer'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function App() {

  return (
    <Router>

    <Navbar/>

    <Route path='/' Component={HeroSection}/>
    <Route path='/aboutus' Component={Aboutus}/>
    <Route path='/aboutus' Component={Aboutus}/>
    <Route path='/offer' Component={Offer}/>
    
   

    </Router>
  )
}

export default App
// <HeroSection/>
// <Aboutus/>
// <Offer/>
// <Footer/>