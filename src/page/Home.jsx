import React from 'react'
import Navbar from '../components/Navbar'
import ServiceSection from '../components/Service'
import HeroSection from '../components/HeroSection'
import LogoShowcase from '../components/LogoShowcase'
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LogoShowcase />
      <ServiceSection />
    </div>
  )
}

export default Home
