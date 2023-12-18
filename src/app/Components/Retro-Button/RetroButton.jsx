import React from 'react';
import './RetroButton.css'; // You can create a CSS file for styling

const RetroButton = ({text}) => {
  return (
    <button className="retro-button">{text}</button>
  );
}

export default RetroButton;