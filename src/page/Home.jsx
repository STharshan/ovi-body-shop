


import React from 'react'
import Navbar from '../components/Navbar'
import ServiceSection from '../components/Service'
import HeroSection from '../components/HeroSection'
import LogoShowcase from '../components/LogoShowcase'
import About from '../components/Whyus'
import TestimonialsCarousel from '../components/Testimonials'
import GallerySection from "../components/GallerySection"
import ContactSection from '../components/Contact'
import FindUs from '../components/Findus'
import Faq from "../components/faq"
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <LogoShowcase />
            <About />
            <ServiceSection />
            <TestimonialsCarousel />
            <GallerySection />
            <ContactSection />
            <FindUs />
            <Faq />
        </div>
    )
}

export default Home