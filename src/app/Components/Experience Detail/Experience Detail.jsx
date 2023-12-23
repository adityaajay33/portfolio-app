"use client";
import React, {useState} from 'react'
import ExperienceInformation from '../Experience Information/ExperienceInformation'
import './Experience Detail.css'

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

const ExperienceDetail = () => {
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);

  const handleExperienceClick = (index) => {
    setSelectedExperienceIndex(index);
  };
  return (
    <div>
        <div className='titleExperiences'>
            Experiences
        </div>
        <div className='container'>
            <div className="listExperiences">
            {experiencesData.map((experience, index) => (
            <div
                key={index}
                className={`eachExperience ${index === selectedExperienceIndex ? 'selected' : ''}`}
                onClick={() => handleExperienceClick(index)}
            >
                {experience.name}
            </div>
            ))}
            </div>
            <ExperienceInformation index={selectedExperienceIndex} />
        </div>
    </div>
  )
}

export default ExperienceDetail