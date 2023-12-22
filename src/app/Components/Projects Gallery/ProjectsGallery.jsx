import React from 'react'
import "./ProjectsGallery.css"
import Image from "next/image";
import pb from "../../assets/projects_icons/11.jpg";
import jei from "../../assets/projects_icons/jei.jpg";
import tic from "../../assets/projects_icons/tic.png";
import cc from "../../assets/projects_icons/cc.jpeg";
import dss from "../../assets/projects_icons/dss.jpeg";
import wb from "../../assets/projects_icons/wb.jpeg";

const ProjectsGallery = () => {
  return (
    <div className="container">
        <div className='pbDiv'>
            <Image src={pb} width={700}/>
            <div className="overlay">
                <h2 className="projectTitle">PortfolioBase</h2>
                <p className="projectDescription">PortfolioBase: platform to connect design students with agencies.</p>
            </div>
        </div>
        <div className="mlDiv">
            <Image src={jei} width={700}/>
            <div className="overlay1">
                <h2 className="projectTitle">PortfolioBase</h2>
                <p className="projectDescription">PortfolioBase: platform to connect design students with agencies.</p>
            </div>
        </div>
        <div className="ticDiv">
            <Image src={tic} width={700}/>
            <div className="overlay2">
                <h2 className="projectTitle">PortfolioBase</h2>
                <p className="projectDescription">PortfolioBase: platform to connect design students with agencies.</p>
            </div>
        </div>

        <div className="ccDiv">
            <Image src={cc} width={583} height={510}/>
            <div className="overlay3">
                <h2 className="projectTitle">PortfolioBase</h2>
                <p className="projectDescription">PortfolioBase: platform to connect design students with agencies.</p>
            </div>
        </div>
        <div className="dssDiv">
            <Image src={dss} width={817} height={510}/>
            <div className="overlay4">
                <h2 className="projectTitle">PortfolioBase</h2>
                <p className="projectDescription">PortfolioBase: platform to connect design students with agencies.</p>
            </div>
        </div>

        <div className="legoDiv">
            <Image src={wb} width={1400} height={520}/>
            <div className="overlay5">
                <h2 className="projectTitle">PortfolioBase</h2>
                <p className="projectDescription">PortfolioBase: platform to connect design students with agencies.</p>
            </div>
        </div>
        
    </div>
  )
}

export default ProjectsGallery