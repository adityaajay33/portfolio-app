import React from 'react'
import Image from "next/image"

const CardProject = ({title, paragraph, srcs}) => {
  return (
    <div className='boxCard'>
            <div className="projectBackground">
                <div className="titleBox">
                    {title}
                </div>
                <div className="description">
                    {paragraph}
                </div>

            </div>

            <div className="backgroundBox">
                <Image src={srcs} width={700} className='cardBusiness' />
            </div>
    </div>
  )
}

export default CardProject