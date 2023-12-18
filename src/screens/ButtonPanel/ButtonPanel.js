import React from 'react';
import './ButtonPanel.css'; // Ensure the path is correct
import driveIcon from '../../assets/driveicon.png'; // Adjust path as necessary
import locationIcon from '../../assets/locationicon.png'; // Adjust path as necessary

function ButtonPanel({ text, iconName, iconWidth, iconHeight, onClick }) {
  let iconSrc;
  if (iconName === 'drive') {
    iconSrc = driveIcon;
  } else if (iconName === 'location') {
    iconSrc = locationIcon;
  }

  // Dynamic style for the icon
  const iconStyle = {
    width: iconWidth,
    height: iconHeight,
    marginBottom: '10px', // Space between icon and text
  };

  return (
    <div className="ButtonPanel" onClick={onClick}>
      {iconSrc && <img src={iconSrc} alt={text} style={iconStyle} />}
      <p>{text}</p>
    </div>
  );
}

export default ButtonPanel;
