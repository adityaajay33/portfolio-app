import React from 'react'
import "./Personal.css"

const Personal = () => {
  return (
    <div>

        <div className='myName'>Hi! I'm Aditya,</div>
        <div className='backgroundAditya'>First year Mechatronics student at the University of Waterloo. In the serenity of my existence, I derive profound contentment from the resonance of the Tsugaru Shamisen's strings, each note a whisper of hidden truths. With a quiet yearning for knowledge, I lose myself in the profound narratives of well-worn books, unwrapping the wisdom woven into their pages. </div>
        <div className='mySkills'>

            <div className='reactSkill'>
                React.js
            </div>
            <div className='pythonSkill'>
                Python
            </div>
            <div className='nodeSkill'>
                Node.js
            </div>
        </div>
    </div>
  )
}

export default Personal