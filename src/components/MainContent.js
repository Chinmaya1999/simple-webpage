import React from 'react';

const MainContent = () => {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>Hello, I'm <span style={styles.highlight}>John Doe</span></h1>
        <p style={styles.heroSubtitle}>
          A passionate Frontend Developer creating beautiful, functional web experiences
        </p>
        <div style={styles.heroButtons}>
          <button style={styles.primaryButton} onClick={() => window.open('#projects', '_self')}>
            View My Work
          </button>
          <button style={styles.secondaryButton} onClick={() => window.open('#contact', '_self')}>
            Contact Me
          </button>
        </div>
        <div style={styles.socialLinks}>
          <a href="https://github.com" style={styles.socialLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" style={styles.socialLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com" style={styles.socialLink} target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="mailto:john@example.com" style={styles.socialLink}>Email</a>
        </div>
      </div>
      <div style={styles.heroImage}>
        <div style={styles.imagePlaceholder}>
          <span style={styles.imageText}>👨‍💻</span>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    backgroundColor: '#f8f9fa',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    padding: '60px 20px',
  },
  heroContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    flex: 1,
  },
  heroTitle: {
    fontSize: '48px',
    color: '#333',
    lineHeight: '1.2',
  },
  highlight: {
    color: '#4a6cf7',
  },
  heroSubtitle: {
    fontSize: '20px',
    color: '#666',
    maxWidth: '600px',
    lineHeight: '1.6',
  },
  heroButtons: {
    display: 'flex',
    gap: '15px',
    marginTop: '30px',
  },
  primaryButton: {
    backgroundColor: '#4a6cf7',
    color: 'white',
    padding: '12px 30px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#4a6cf7',
    padding: '12px 30px',
    border: '2px solid #4a6cf7',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  },
  socialLinks: {
    display: 'flex',
    gap: '20px',
    marginTop: '40px',
  },
  socialLink: {
    color: '#666',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'color 0.3s ease',
  },
  heroImage: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    backgroundColor: '#e9ecef',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageText: {
    fontSize: '100px',
  },
};

export default MainContent;