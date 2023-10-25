import React from 'react'
import "./Introduction.css"
import Image from "next/image"
import kaws from "../../assets/kaws.png"
import waterSerpentsII from "../../assets/wasserschlangen.jpeg"
import card from "../../assets/bcard.png"


const Introduction = () => {
  return (
    <div className="wholeBox">
      <div className="waterSerpents">
        <Image className="waterImage" src={waterSerpentsII} width={1350} />
      </div>
      <div className="differentBox">
        <Image src={card} width={700} className='cardBusiness' />
      </div>
    </div>
  )
}

export default Introduction