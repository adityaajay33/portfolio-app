import React from 'react'
import "./Footer.css"

const getCurrentYear = () => {

  const currentYear = new Date().getFullYear();
  return currentYear;
}

const year = getCurrentYear();

const Footer = () => {
  return (
    <div className="footerMain">
      <div className="socialLinks">
      <a href="https://github.com/adityaajay33" target="_blank" rel="noopener noreferrer">Github</a>
      <a href="https://www.linkedin.com/in/adityaajay33/" target="_blank" rel="noopener noreferrer">Linkedin</a>
      <a href="https://devpost.com/aditya-ajay33?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer">Devpost</a>
      </div>
      <div className='footerCR'>
      
        Copyright © {year} | Aditya Ajay
      
      </div>
    </div>
  )
}

export default Footer