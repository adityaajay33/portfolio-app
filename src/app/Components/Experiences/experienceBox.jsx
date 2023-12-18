import React from 'react'
import "./experienceBox.css"

import Image from "next/image"
import card from "../../assets/bcard.png"
import CardProject from '../project card/CardProject'

const paragraphs = {
    title1: "PortfolioBase",
    paragraph1: "PortfolioBase is a platform that connects design students with agencies for short-term and entry-level employment opportunities.",
}

const ExperiencesBox = () => {
  return (
    <>
        <CardProject title={paragraphs.title1} paragraph={paragraphs.paragraph1} />

    </>
  )
}

export default ExperiencesBox;