import React, {useState} from 'react'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import { aboutData } from '../components/AboutSection/Data'
import Services from '../components/ServiceSection'
import Portfolio from '../components/PortfolioSection'
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import Contact from '../components/ContactSection'


function Home() {
    const [isOpen , setIsOpen ] = useState(false);
    const toggle = () => 
    {
        setIsOpen (!isOpen);
    };
    
    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection />
            <AboutSection {...aboutData}/>
            <Services />
            <Portfolio />
            <Reviews />
            <Contact />
            <Footer /> 
        </>
    )
}

export default Home
