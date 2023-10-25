import React, { useState } from 'react'

const Contact = () => {

    const contactForm = () => {

        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      
  return (
    <div className='contactUsBox'>
        <div className='TitleBox'>
            Contact Me!
        </div>
        <Form on 
    </div>
  )
}

export default Contact