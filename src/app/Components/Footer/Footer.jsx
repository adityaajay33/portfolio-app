import React from 'react'
import "./Footer.css"

const getCurrentYear = () => {

  const currentYear = new Date().getFullYear();
  return currentYear;
}

const year = getCurrentYear();

const Footer = () => {
  return (
    <div className='footerHome'>Copyright © {year} | Aditya Ajay</div>
  )
}

export default Footer