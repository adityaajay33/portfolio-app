"use client";

import React, { useState } from 'react';
import "./ProjectsPreview.css";
import pbase from "../../assets/projects_icons/11.jpg";
import desserto from "../../assets/projects_icons/desserto.png";
import Image from "next/image";
import card from "../../assets/bcard.png";
import CardProject from '../project card/CardProject';

const ProjectsPreview = () => {
  const [showDescriptionPBase, setShowDescriptionPBase] = useState(false);
  const [showDescriptionRP, setShowDescriptionRP] = useState(false);
  const [showDescriptionDesserto, setShowDescriptionDesserto] = useState(false);

  const paragraphs = {
    title1: "PortfolioBase",
    paragraph1: "PortfolioBase is a platform that connects design students with agencies for short-term and entry-level employment opportunities. The website is designed using the MERN Stack - MongoDB, Express.js, React.js, and Node.js.",
    title2: "Machine Learning Research Paper",
    paragraph2: "Conducted research and wrote a research paper on the relevance of electric vehicles to help Canada reach their emissions goals. I implemented multiple algorithms such as XGBoost Regression, Exponential Regression, and Polynomial Regression to increase the accuracy of my model and find how effective electric vehicles would be to help reach Canada’s 2030 emissions goals.",
    title3: "Toyota Innovation Challenge - Sticker Detection",
    paragraph3: "Implemented an algorithm to automate the sticker placement part of Toyota's manufacturing cycle. Achieved using a YOLOv8 model trained on data collected independently by myself and one another. Won an award at the event."
  };

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
          PortfolioBase                       
        </div>

        <div className={`workDescription ${showDescriptionPBase ? 'show' : ''}`}>
          <CardProject title={paragraphs.title1} paragraph={paragraphs.paragraph1} srcs={card} />
        </div>
      </div>

      <div className={`projectsBox ${showDescriptionRP ? 'expanded' : ''}`} onClick={toggleDescriptionRP}>
        <div className='titleBox'>
          Machine Learning Research Paper
        </div>

        <div className={`workDescription ${showDescriptionRP ? 'show' : ''}`}>
        <CardProject title={paragraphs.title2} paragraph={paragraphs.paragraph2} srcs={card} />
        </div>
      </div>

      <div className={`projectsBox ${showDescriptionDesserto ? 'expanded' : ''}`} onClick={toggleDescriptionDesserto}>
        <div className='titleBox'>
          Toyota Sticker Placement Algorithm
        </div>

        <div className={`workDescription ${showDescriptionDesserto ? 'show' : ''}`}>
          <CardProject title={paragraphs.title3} paragraph={paragraphs.paragraph3} srcs={card} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPreview;
