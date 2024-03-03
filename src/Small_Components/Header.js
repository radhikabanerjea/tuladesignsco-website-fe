import React, { useState, useEffect } from 'react';

const headerStyle = {
    display: 'flex', 
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    width: '100%',
    height: '50px', // Set a fixed height to make the header thinner
    backgroundColor: '#BDD6BD', // A shade of mint green
    color: 'black',
    fontSize: '10px', // Smaller font size
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '1000',
    margin: '0', // Ensure that there's no extra margin
  };

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const rotatingText = ["Welcome to Our Store", "Free Shipping On All Sticker Orders", "Contact Us For Bulk Order Inquiries"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingText.length);
    }, 5000); // Change text every 2 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [rotatingText.length]);

  return (
    <div style={headerStyle}>
      <h1>{rotatingText[currentIndex]}</h1>
    </div>
  );
};

export default Header;
