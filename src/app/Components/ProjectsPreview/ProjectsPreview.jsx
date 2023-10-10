import React from 'react'
import "./ProjectsPreview.css"
import Image from "next/image"
import pbase from "../../assets/projects_icons/11.jpg"
import desserto from "../../assets/projects_icons/desserto.png"

const ProjectsPreview = () => {
  return (
    <div className="projectsMatrix">
        <div className="projectsBox">
            <div className='pictureBoxArea'>

                <Image src={pbase} className='projectIcon' />
            </div>
            <div className='descriptionBox'>
                PortfolioBase
            </div>
        </div>
        <div className="projectsBox">
            <div className='pictureBoxArea'>

                <Image src={desserto} className='projectIcon' />
            </div>
            <div className='descriptionBox'>
                Desserto
            </div>
        </div>

    </div>
  )
}

export default ProjectsPreview