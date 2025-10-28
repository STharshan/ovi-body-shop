import React from 'react'
import Navbar from '../components/Navbar'
import ServiceSection from '../components/Service'
import HeroSection from '../components/HeroSection'
import LogoShowcase from '../components/LogoShowcase'
import About from '../components/Whyus'
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LogoShowcase />
      <About />
      <ServiceSection />
    </div>
  )
}

export default Home
