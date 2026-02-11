import React from 'react';

const About = () => {
  return (
    <section id="about" style={styles.about}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <div style={styles.aboutContent}>
          <div style={styles.aboutText}>
            <p style={styles.paragraph}>
              I'm a passionate Frontend Developer with 3+ years of experience creating 
              responsive and user-friendly web applications. I specialize in React.js, 
              JavaScript, and modern CSS frameworks.
            </p>
            <p style={styles.paragraph}>
              My goal is to build products that not only look great but also provide 
              exceptional user experiences. I enjoy turning complex problems into 
              simple, beautiful designs.
            </p>
            <div style={styles.infoGrid}>
              <div style={styles.infoItem}>
                <strong>Location:</strong> San Francisco, CA
              </div>
              <div style={styles.infoItem}>
                <strong>Experience:</strong> 3+ Years
              </div>
              <div style={styles.infoItem}>
                <strong>Email:</strong> john@example.com
              </div>
              <div style={styles.infoItem}>
                <strong>Freelance:</strong> Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  about: {
    padding: '80px 20px',
    backgroundColor: 'white',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '36px',
    color: '#333',
    textAlign: 'center',
    marginBottom: '50px',
  },
  aboutContent: {
    display: 'flex',
    gap: '50px',
    alignItems: 'center',
  },
  aboutText: {
    flex: 1,
  },
  paragraph: {
    fontSize: '18px',
    color: '#666',
    lineHeight: '1.8',
    marginBottom: '20px',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px',
    marginTop: '30px',
  },
  infoItem: {
    padding: '15px',
    backgroundColor: '#f8f9fa',
    borderRadius: '5px',
    fontSize: '16px',
  },
};

export default About;