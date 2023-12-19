import React from 'react'
import Image from "next/image"
import "./CardProject.css"
import card from "../../assets/bcard.png"
import RetroButton from '../Retro-Button/RetroButton'

const CardProject = ({title, paragraph, srcs}) => {

    const buttonText = "MORE";
  return (
    <div className='boxCard'>

        <div className='titleCard'> {title} </div>

        <div className='descriptionCard'>
            {paragraph}
        </div>
    </div>
  )
}

export default CardProject