import React from 'react'
import "./ProjectsGallery.css"
import Image from "next/image";
import pb from "../../assets/projects_icons/11.jpg";
import jei from "../../assets/projects_icons/jei.jpg";
import tic from "../../assets/projects_icons/tic.png";
import cc from "../../assets/projects_icons/cc.jpg";
import dss from "../../assets/projects_icons/dss.jpg";
import wb from "../../assets/projects_icons/wb.jpg";

const ProjectsGallery = () => {
  return (
    <div className="container">
        <div className='pbDiv'>
            <Image src={pb} width={500}/>
            <div className="overlay">
                <h2 className="projectTitle">PortfolioBase</h2>
                <p className="projectDescription">PortfolioBase: platform to connect design students with agencies.</p>
            </div>
        </div>
        <div className="mlDiv">
            <Image src={jei} width={480}/>
        </div>
        <div className="ticDiv">
            <Image src={tic} width={480}/>
        </div>

        <div className="ccDiv">
            <Image src={cc} width={400}/>
        </div>
        <div className="dssDiv">
            <Image src={dss} width={570} height={360}/>
        </div>

        <div className="legoDiv">
            <Image src={wb} width={980} height={340}/>
        </div>
        
    </div>
  )
}

export default ProjectsGallery