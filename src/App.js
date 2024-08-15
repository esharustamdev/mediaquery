import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Section from './components/Section'
import ThirdSec from './components/ThirdSec'
import ForthSec from './components/ForthSec'
import Category from './components/Category'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section />
      <ThirdSec />
      <ForthSec />
      <Category />
      <Footer />
    </div>
  )
}

export default App
