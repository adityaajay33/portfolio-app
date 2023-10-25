"use client";

import React from 'react'
import Slideshow from '../Slideshow/Slideshow'
import velocity from "../../assets/aditya_velocity.png"
import cbc from "../../assets/aditya_cbc.jpeg"

const images = [
    "/../../assets/aditya_velocity.png",
    "/../../assets/aditya_cbc.jpeg"

]

const About = () => {
  return (
    <div>
        <div>
            <Slideshow images={images} /> 
        </div>
    </div>
  )
}

export default About