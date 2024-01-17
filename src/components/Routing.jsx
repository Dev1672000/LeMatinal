import React,{useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbarr from './Navbarr'
import Footer from './Footer'
import HeroPage from "./HeroPage"
import Healthcare from "./Healthcare"
import Sports from "./Sports"
import Spotlight from "./Spotlight"
import Personality from "./Personality"
import Corporate from "./Corporate"
import Expand from './Expand';
import HealthcareDes from "./Healthcare/Description";
import SportDes from "./Sports/Description"
import SpotlightDes from "./Spotlight/Description"
import PersonalityDes from "./Personality/Description"
import CorporateDes from "./Corporate/Description"
import { useLocation } from "react-router-dom";

const Routing = () => {
   const { pathname } = useLocation();
   
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div>
      <Navbarr />
      <Routes>
        <Route path="/Healthcare" element={<Healthcare />} />
        <Route path="/Healthcare/:userId" element={<HealthcareDes />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Sports/:userId" element={<SportDes />} />
        <Route path="/Spotlight" element={<Spotlight />} />
        <Route path="/Spotlight/:userId" element={<SpotlightDes />} />
        <Route path="/Personality" element={<Personality />} />
        <Route path="/Personality/:userId" element={<PersonalityDes />} />
        <Route path="/Corporate" element={<Corporate />} />
        <Route path="/Corporate/:userId" element={<CorporateDes />} />
        <Route path="/article" element={<Expand />} />
        <Route path="/" element={<HeroPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Routing