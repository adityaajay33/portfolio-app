import React from 'react'
import "./ExperienceInformation.css"

const experiencesData = [

    {
        name:'TurtleHacks Co-Lead', period:'2022-2023', description: 'Led 19 people team to achieve turnout of 342 participants. Worked closely with Purolator, Microsoft and other sponsor to award hackers $9k in prizes. Directed tech and marketing departments to achieve website development and social media growth.'
    },
    {
        name:'Firmware Developer', period: '2023-present', description: 'I wrote code for Battery Management Unit HIL in C. I wrote HIL Tests for Battery Management Unit.',
    },
    {
        name:'Customer Service Rep', period: '2021', description: 'I worked as a customer service representative for a local minigolf location. I handled the transactions, customer experience, and upkeep at the Oakville location during shifts.'
    },
    {
        name:'PortfolioBase Lead', period: '2022-present', description:'Portfolio-sharing platform connecting design students with agencies developed using React.js, Node.js, and MongoDB. I connected 8 design agencies with students. PortfolioBase received $3k grant from the Ontario Govt.'
    }
];

const ExperienceInformation = ({index}) => {
    console.log(experiencesData[index]);
  return (
    <div className='informationExp'>
        <div className="titleExp">
            {experiencesData[index].name}
        </div>
        <div className="descriptionExp">
            {experiencesData[index].description}
        </div>
    </div>
  )
}

export default ExperienceInformation