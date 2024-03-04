import React from 'react';

// CSS styles for the header
const ContactUsFooterStyle = {
  display: 'flex', // Use flexbox for centering
  justifyContent: 'center', // Center horizontally
  alignItems: 'center', // Center vertically
  width: '100%',
  height: '190px', // Set a fixed height to make the header thinner
  backgroundColor: '#FFEFEF', // A shade of mint green
  color: 'black',
  fontSize: '12px', // Smaller font size
  //fontFamily: 'Plus Jakarta Sans, sans-serif', //setting the font
  overflowY: 'auto',
  bottom: '0',
  zIndex: '1000',
  margin: '0', // Ensure that there's no extra margin
 
};

const inputStyle1 = {
  marginTop: '5px',
  width: '100%',
  height: '20px',
  //fontSize: '10px',
  fontWeight: '200',
  backgroundColor: '#FFFFFF',
  color: '#FFAFAF',
  border: 'none'
  //fontFamily: 'Plus Jakarta Sans, sans-serif', //setting the font
  //marginLeft: '40px', // Add a left margin of 20 pixels
};

const inputStyle2 = {
  marginTop: '5px',
  width: '100%',
  height: '100px',
  //fontSize: '10px',
  fontWeight: '200',
  backgroundColor: '#FFFFFF',
  color: '#FFAFAF',
  border: 'none'
  //fontFamily: 'Plus Jakarta Sans, sans-serif', //setting the font
  //marginRight: '40px', // Add a right margin of 20 pixels
};

const ContactUsFooter = () => {
  return (
    <div style={ContactUsFooterStyle}>
      <div style={{ textAlign: 'center'}}>
        <div style={{ fontSize: '20px'}}><h>Contact Us</h></div>
        <span>
          If you have any questions or comments regarding an order, custom orders, or bulk orders, leave your contact information and message below. We will reply within 3-5 business days!
        </span>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ textAlign: 'left', marginRight: '20px' }}>
            <div style={inputStyle1}>
              <span>Name:</span><input type="text" name="name"style={{ border: 'none' }} />
            </div>
            <div style={inputStyle1}>
              <span>Email:</span><input type="text" name="email"style={{ border: 'none' }} />
            </div>
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={inputStyle2}>
              <span>Message:</span><input type="text" name="message" style={{ border: 'none', height: '100px'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsFooter;
