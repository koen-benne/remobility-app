// Import necessary dependencies from React
import React, { useState, useEffect } from 'react';

// Import the styles for the component
import style from './Style.module.css';

// Define the Startup component
const Startup = () => {
  // State to manage the visibility of the splash screen
  const [visible, setVisible] = useState(true);

  // useEffect to handle the lifecycle of the component
  useEffect(() => {
    // Set a timer to hide the splash screen after a specified duration
    const timer = setTimeout(() => {
      setVisible(false); // Update the state to make the splash screen invisible
    }, 1000); // Set the duration of the splash screen in milliseconds

    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures that useEffect runs only once after the initial render

  // Render the component
  return (
    <div className={`${style.screen} ${visible ? style.visible : style.hidden}`}>
      {/* Display the logo image with the alt text */}
      <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="Remobility" />
    </div>
  );
}

// Export the Startup component as the default export of this module
export default Startup;
