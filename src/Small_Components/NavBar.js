import React from 'react';
import { Link } from 'react-router-dom';
import turtleImg from '../images/Tula_Logo.jpg';
import logoImg from '../images/Tula_Website_Title.jpg'; 
import instagramIcon from '../images/instagram.jpg'; 
import emailIcon from '../images/mail.jpg'; 
import cartIcon from '../images/shopping.jpg';

const styles = {
  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    backgroundColor: 'white',
    height: '300px',
  },
  navItem: {
    padding: '0 10px', 
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  navLink: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '16px', 
    padding: '0 10px',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  imageIcon: {
    height: '10%', 
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
