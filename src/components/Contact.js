import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" style={styles.contact}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Get In Touch</h2>
        <div style={styles.contactContent}>
          <div style={styles.contactInfo}>
            <h3 style={styles.infoTitle}>Contact Information</h3>
            <div style={styles.infoItem}>
              <strong>📍 Location:</strong> San Francisco, California
            </div>
            <div style={styles.infoItem}>
              <strong>📧 Email:</strong> john@example.com
            </div>
            <div style={styles.infoItem}>
              <strong>📱 Phone:</strong> +1 (555) 123-4567
            </div>
            <div style={styles.socialIcons}>
              <a href="https://github.com" style={styles.socialIcon}>GitHub</a>
              <a href="https://linkedin.com" style={styles.socialIcon}>LinkedIn</a>
              <a href="https://twitter.com" style={styles.socialIcon}>Twitter</a>
            </div>
          </div>
          <form style={styles.contactForm} onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                style={styles.formInput}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                style={styles.formInput}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                style={styles.formTextarea}
                rows="5"
                required
              />
            </div>
            <button type="submit" style={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const styles = {
  contact: {
    padding: '80px 20px',
    backgroundColor: '#f8f9fa',
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
  contactContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '50px',
  },
  contactInfo: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
  },
  infoTitle: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '30px',
  },
  infoItem: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '20px',
    lineHeight: '1.6',
  },
  socialIcons: {
    display: 'flex',
    gap: '15px',
    marginTop: '30px',
  },
  socialIcon: {
    textDecoration: 'none',
    color: '#4a6cf7',
    backgroundColor: '#e9ecef',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
  },
  contactForm: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
  },
  formGroup: {
    marginBottom: '20px',
  },
  formInput: {
    width: '100%',
    padding: '12px 15px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px',
  },
  formTextarea: {
    width: '100%',
    padding: '12px 15px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px',
    resize: 'vertical',
  },
  submitButton: {
    backgroundColor: '#4a6cf7',
    color: 'white',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: '600',
    width: '100%',
    transition: 'background-color 0.3s ease',
  },
};

export default Contact;