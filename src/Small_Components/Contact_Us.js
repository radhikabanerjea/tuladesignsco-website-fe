import React, { useState, useEffect } from 'react';

// CSS styles for the header
const ContactUsFooterStyle = {
    display: 'flex', // Use flexbox for centering
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    width: '100%',
    height: '250px', // Set a fixed height to make the header thinner
    backgroundColor: '#FFCECE', // A shade of mint green
    color: 'black',
    fontSize: '12px', // Smaller font size
    //fontFamily: 'Plus Jakarta Sans, sans-serif', //setting the font
    position: 'fixed',
    bottom: '0',
    zIndex: '1000',
    margin: '0', // Ensure that there's no extra margin
  };

const inputStyle1 = {
    width: '100%',
    height: '20px',
    fontSize: '10px',
    backgroundColor: '#FFFFFF',
    color: '#D3D3D3',
    //fontFamily: 'Plus Jakarta Sans, sans-serif', //setting the font
    //marginLeft: '40px', // Add a left margin of 20 pixels

};

const inputStyle2 = {
    width: '100%',
    height: '100px',
    fontSize: '10px',
    backgroundColor: '#FFFFFF',
    color: '#D3D3D3',
    //fontFamily: 'Plus Jakarta Sans, sans-serif', //setting the font
    //marginRight: '40px', // Add a right margin of 20 pixels

};


const ContactUsFooter = () => {
    return (
        <div style={ContactUsFooterStyle}>
            <div style={{ textAlign: 'center' }}>
                <h1>Contact Us</h1>
                <h2>If you have any questions or comments regarding an order, custom orders, or bulk orders, leave your contact information and message below. I will reply within 3-5 business days!</h2>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'left', marginRight: '20px' }}>
                        <div style={inputStyle1}>
                            <h3>Name:<input type="text" name="name" /></h3>
                        </div>
                        <div style={inputStyle1}>
                            <h4>Email:<input type="text" name="email" /></h4>
                        </div>
                     </div>
                    <div style={{ textAlign: 'left' }}>
                        <div style={inputStyle2}>
                            <h5>Message:<input type="text" name="message" /></h5>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};
  
  export default ContactUsFooter;