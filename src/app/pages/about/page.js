import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import About from '../../Components/About/About'
import Personal from '../../Components/Personal/Personal'
import "./about.css"

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='mainPortion'>
          <About />
          <Personal />
        </div>
        
        <Footer />
    </div>
  )
}

export default Home
