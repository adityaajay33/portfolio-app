import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import ExperiencesBox from '../../Components/Experiences/experienceBox'

const page = () => {
  return (
    <div>
        <Navbar />
        <ExperiencesBox />
        <Footer />
    </div>
  )
}

export default page