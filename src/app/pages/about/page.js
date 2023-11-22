import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import About from '../../Components/About/About'
import Personal from '../../Components/Personal/Personal'
import "./about.css"
import Contact from '../../Components/Contact/Contact'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='mainPortion'>
          <About />
          <Personal />
        </div>
        <Contact />
        
        <Footer />
    </div>
  )
}

export default Home
