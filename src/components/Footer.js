import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerLogo}>
          <h3 style={styles.footerTitle}>John Doe</h3>
          <p style={styles.footerTagline}>Frontend Developer & UI Designer</p>
        </div>
        <div style={styles.footerLinks}>
          <a href="#home" style={styles.footerLink}>Home</a>
          <a href="#about" style={styles.footerLink}>About</a>
          <a href="#projects" style={styles.footerLink}>Projects</a>
          <a href="#skills" style={styles.footerLink}>Skills</a>
          <a href="#contact" style={styles.footerLink}>Contact</a>
        </div>
        <div style={styles.footerBottom}>
          <p style={styles.copyright}>
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <p style={styles.madeWith}>
            Made with ❤️ using React
          </p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '60px 20px 30px',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  footerLogo: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  footerTitle: {
    fontSize: '28px',
    marginBottom: '10px',
  },
  footerTagline: {
    color: '#aaa',
    fontSize: '16px',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginBottom: '40px',
    flexWrap: 'wrap',
  },
  footerLink: {
    color: '#aaa',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'color 0.3s ease',
  },
  footerBottom: {
    textAlign: 'center',
    paddingTop: '30px',
    borderTop: '1px solid #444',
  },
  copyright: {
    color: '#aaa',
    fontSize: '14px',
    marginBottom: '10px',
  },
  madeWith: {
    color: '#666',
    fontSize: '14px',
  },
};

export default Footer;