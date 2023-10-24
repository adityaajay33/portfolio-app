"use client";

import React, { useState } from 'react'
import "./ProjectsPreview.css"
import Image from "next/image"
import pbase from "../../assets/projects_icons/11.jpg"
import desserto from "../../assets/projects_icons/desserto.png"

const ProjectsPreview = () => {
    const [showDescription, setShowDescription] = useState(false);
  
    const toggleDescription = () => {
      setShowDescription(!showDescription);
    };
  
    return (
      <div className="projectsMatrix">
        <div className="projectsTitle">
            Projects
        </div>
        <div className={`projectsBox ${showDescription ? 'expanded' : ''}`} onClick={toggleDescription}>
            <div className='titleBox'>
                PortfolioBase
                <span className="arrow">{showDescription ? '▲' : '▼'}</span>
            </div>
            
            <div className={`workDescription ${showDescription ? 'show' : ''}`}>
            PortfolioBase connects design students with agencies for short-term and long-term employment opportunities through portfolio-sharing. There is a Minimum Viable Product available that is non-deployed. There exists beta users from both customer and agencies side.
            </div>
        </div>
        
        <div className={`projectsBox ${showDescription ? 'expanded' : ''}`} onClick={toggleDescription}>
          <div className='titleBox'>
            Machine Learning Research Paper
            <span className="arrow">{showDescription ? '▲' : '▼'}</span>
          </div>
          
          <div className={`workDescription ${showDescription ? 'show' : ''}`}>
            We want to provide a platform for people to share their delicious pieces of heaven. We believe that creators should be able to own their content without the presence of a central authority. Hence, a decentralized recipe sharing site.
          </div>
        </div>

        <div className={`projectsBox ${showDescription ? 'expanded' : ''}`} onClick={toggleDescription}>
          <div className='titleBox'>
            DeSsert                        
            <span className="arrow">{showDescription ? '▲' : '▼'}</span>
          </div>
          
          <div className={`workDescription ${showDescription ? 'show' : ''}`}>
            We want to provide a platform for people to share their delicious pieces of heaven. We believe that creators should be able to own their content without the presence of a central authority. Hence, a decentralized recipe sharing site!
          </div>
        </div>
      </div>
    );
  };

export default ProjectsPreview