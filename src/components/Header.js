import React from 'react';

const Header = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navContent}>
        <div style={styles.logo}>
          <h2>John Doe</h2>
          <p style={styles.tagline}>Frontend Developer & UI Designer</p>
        </div>
        <ul style={styles.navLinks}>
          <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
          <li style={styles.navItem}><a href="#about" style={styles.navLink}>About</a></li>
          <li style={styles.navItem}><a href="#projects" style={styles.navLink}>Projects</a></li>
          <li style={styles.navItem}><a href="#skills" style={styles.navLink}>Skills</a></li>
          <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
  },
  tagline: {
    color: '#666',
    fontSize: '14px',
    marginTop: '4px',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '30px',
  },
  navItem: {
    padding: '5px 0',
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
    fontSize: '16px',
    transition: 'color 0.3s ease',
  },
};

export default Header;