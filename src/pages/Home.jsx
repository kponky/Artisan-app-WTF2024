import React from "react";
import HeroSection from "../components/HeroSection"
import Aboutus from '../components/Aboutus'
import Offer from '../components/Offer'
import Testiminial from '../components/Testiminial'
import Community from "../components/Community"


const Home = () => {
  return (
    <div>
    
     <HeroSection />
      <Aboutus/>
      <Offer />
      <Testiminial />
      <Community />
    </div>
  );
};

export default Home;
