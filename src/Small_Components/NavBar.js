import React from 'react';
import { Link } from 'react-router-dom';
import turtleImg from '../images/Tula_Logo.jpg'; // Adjust the path to your image
import logoImg from '../images/Tula_Website_Title.jpg'; // Adjust the path to your image
import instagramIcon from '../images/instagram.jpg'; // Adjust with your actual image path
import emailIcon from '../images/mail.jpg'; // Adjust with your actual image path
import cartIcon from '../images/shopping.jpg'; // Adjust with your actual image path

const styles = {
  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    backgroundColor: 'white',
    height: '300px', // Increase the height to make the bar thicker
  },
  navItem: {
    padding: '0 10px', // Adjust padding as needed
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  navLink: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '16px', // Adjust as needed
    padding: '0 10px', // Adjust padding as needed
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  imageIcon: {
    height: '10%', // Adjust the icon size relative to the navbar height
  },
  turtleIcon:{
    height: '100%', 
  },
  logoIcon:{
    height: '150%', 
  },
};

function NavBar() {
  return (
    <div style={styles.navBar}>
      <Link to="/" style={styles.navItem}>
        <img src={turtleImg} alt="Home" style={styles.turtleIcon} />
      </Link>

      <Link to="/shop" style={styles.navLink}>Shop</Link>

      <Link to="/about" style={styles.navLink}>About Us</Link>

      <div style={styles.navItem}>
        <img src={logoImg} alt="Tula Designs Co" style={styles.logoIcon} />
      </div>

      <Link to="/contact" style={styles.navLink}>Contact</Link>

      <a href="https://www.instagram.com/tuladesignsco" target="_blank" rel="noopener noreferrer" style={styles.navItem}>
        <img src={instagramIcon} alt="Instagram" style={styles.imageIcon} />
      </a>

      <a href="mailto:tuladesignsco@gmail.com" target="_blank" rel="noopener noreferrer" style={styles.navItem}>
        <img src={emailIcon} alt="Instagram" style={styles.imageIcon} />
      </a>

      <Link to="/cart" style={styles.navItem}>
        <img src={cartIcon} alt="Cart" style={styles.imageIcon} />
      </Link>
    </div>
  );
}

export default NavBar;
