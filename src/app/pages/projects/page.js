import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import ProjectsPreview from '../../Components/ProjectsPreview/ProjectsPreview'
import ProjectsGallery from '../../Components/Projects Gallery/ProjectsGallery'

const Projects = () => {
  return (
    <div>
        <Navbar />
        <ProjectsGallery />
        <Footer />
    </div>
  )
}

export default Projects