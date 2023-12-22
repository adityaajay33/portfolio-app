import React from 'react'
import "./ExperienceInformation.css"

const experiencesData = [

    {
        name:'TurtleHacks Co-Lead', period:'2022-2023'
    },
    {
        name:'Firmware Developer', period: '2023-present'
    },
    {
        name:'Customer Service Rep', period: '2021'
    },
    {
        name:'PortfolioBase Lead', period: '2022-present'
    }
];

const ExperienceInformation = ({index}) => {
    console.log(experiencesData[index]);
  return (
    <div className='informationExp'>
        Yes;
    </div>
  )
}

export default ExperienceInformation