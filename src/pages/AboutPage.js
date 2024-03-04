import React from 'react';
import Maria from '../images/Maria.PNG';
import Radhika from '../images/Radhika.jpg';

const AboutPageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflowY: 'auto',
  minHeight: 'calc(100vh - 100px)',
  paddingTop: '20px', // Adjust the top padding to reduce the gap
}

const AboutPageTitle = {
  fontSize: '15px',
  fontWeight: 'lighter',
  color: 'black',
  backgroundColor: 'FFEFEF',
  marginBottom: '20px', // Adjust the bottom margin to reduce the gap
}

const AboutPageText = {
  display: 'flex',
  width: '50%',
  flexDirection: 'column',
  fontSize: '12px',
  overflowY: 'auto',
}

const AboutPhoto = {
  width: '200px', // Adjust the width
  height: 'auto',
}

function AboutPage() {
  return (
    <div style={AboutPageStyle}>
      <div style={AboutPageTitle}>
        <h1>Meet the Founders</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ textAlign: 'left', marginLeft: '30px' }}>
            <h2>Maria</h2>
            <div style={AboutPageText}>
              <div style={{ fontSize: '15px' }}>
                <h>Hello! My name is Maria! I am currently a second year engineering science student at the University of Toronto and your typical resident sticker addict. I am majoring in Robotics engineering. I have a big forehead and tiny feet. </h>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'right', marginRight: '30px' }}>
            <img src={Maria} alt="Maria" style={AboutPhoto} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ textAlign: 'left', marginLeft: '30px' }}>
            <h2>Radhika</h2>
            <div style={AboutPageText}>
              <div style={{ fontSize: '15px' }}>
                <h>Hello! My name is Radhika! I am currently a second year engineering science student at the University of Toronto Maria copied me. I am majoring in Electrical and Computer engineering and I want to make rocket go boom. I LOVE Taylor Swift. In my free time, I frequently contemplate lolling myself off a bridge. Thank you for your time. </h>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'right', marginRight: '30px' }}>
            <img src={Radhika} alt="Radhika" style={AboutPhoto} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
