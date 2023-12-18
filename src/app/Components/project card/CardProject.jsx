import React from 'react'
import Image from "next/image"
import "./CardProject.css"
import card from "../../assets/bcard.png"
import RetroButton from '../Retro-Button/RetroButton'

const CardProject = ({title, paragraph, srcs}) => {

    const buttonText = "MORE";
  return (
    <div className='boxCard'>
            <div className="projectBackground">

                <div className="containerDiv">
                    <div className="titleBoxes">
                        {title}
                    </div>
                    <div className="description">
                        {paragraph}
                    </div>

                    <RetroButton text={buttonText} />
                </div>

            </div>

            <div className="backgroundBox">
                <Image src={srcs} width={700} className='cardBusiness' />
            </div>
    </div>
  )
}

export default CardProject