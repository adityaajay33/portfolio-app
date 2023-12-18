"use client";

import React, { useState } from 'react'
import "./ProjectsPreview.css"
import pbase from "../../assets/projects_icons/11.jpg"
import desserto from "../../assets/projects_icons/desserto.png"


import Image from "next/image"
import card from "../../assets/bcard.png"
import CardProject from '../project card/CardProject'

const ProjectsPreview = () => {
    const [showDescriptionPBase, setShowDescriptionPBase] = useState(false);
    const [showDescriptionRP, setShowDescriptionRP] = useState(false);
    const [showDescriptionDesserto, setShowDescriptionDesserto] = useState(false);


  const paragraphs = {
    title1: "PortfolioBase",
    paragraph1: "PortfolioBase is a platform that connects design students with agencies for short-term and entry-level employment opportunities.",
  }
  
    const toggleDescriptionPBase = () => {
      setShowDescriptionPBase(!showDescriptionPBase);
    };
    const toggleDescriptionRP = () => {
      setShowDescriptionRP(!showDescriptionRP);
    };
    const toggleDescriptionDesserto = () => {
      setShowDescriptionDesserto(!showDescriptionDesserto);
    };
  
    return (
      <div className="projectsMatrix">
        <div className="projectsTitle">
            Projects
        </div>
        <div className={`projectsBox ${showDescriptionPBase ? 'expanded' : ''}`} onClick={toggleDescriptionPBase}>
            <div className='titleBox'>
                <div className='titleChild'>
                  PortfolioBase
                </div>
                <span className="arrow">{showDescriptionPBase ? '▲' : '▼'}</span>
            </div>
            
            <div className={`workDescription ${showDescriptionPBase ? 'show' : ''}`}>
            <CardProject title={paragraphs.title1} paragraph={paragraphs.paragraph1} srcs={card}/>
            </div>
        </div>
        
        <div className={`projectsBox ${showDescriptionRP ? 'expanded' : ''}`} onClick={toggleDescriptionRP}>
          <div className='titleBox'>
            Machine Learning Research Paper
            <span className="arrow">{showDescriptionRP ? '▲' : '▼'}</span>
          </div>
          
          <div className={`workDescription ${showDescriptionRP ? 'show' : ''}`}>
            We want to provide a platform for people to share their delicious pieces of heaven. We believe that creators should be able to own their content without the presence of a central authority. Hence, a decentralized recipe sharing site.
          </div>
        </div>

        <div className={`projectsBox ${showDescriptionDesserto ? 'expanded' : ''}`} onClick={toggleDescriptionDesserto}>
          <div className='titleBox'>
            DeSsert                        
            <span className="arrow">{showDescriptionDesserto ? '▲' : '▼'}</span>
          </div>
          
          <div className={`workDescription ${showDescriptionDesserto ? 'show' : ''}`}>
            We want to provide a platform for people to share their delicious pieces of heaven. We believe that creators should be able to own their content without the presence of a central authority. Hence, a decentralized recipe sharing site!
          </div>
        </div>
      </div>
    );
  };

export default ProjectsPreview