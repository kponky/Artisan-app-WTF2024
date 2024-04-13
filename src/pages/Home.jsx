import React from "react";
import HeroSection from "../Components/HeroSection"
import Aboutus from '../Components/Aboutus'
import Offer from '../Components/Offer'
import Testiminial from '../Components/Testiminial'
import Community from "../Components/Community"


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
