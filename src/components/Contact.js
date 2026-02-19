import React, { useState, useEffect } from 'react';
import { 
  FiMail, 
  FiMapPin, 
  FiPhone, 
  FiGithub, 
  FiLinkedin, 
  FiTwitter,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiTerminal,
  FiClock,
  FiMessageSquare,
  FiChevronRight,
  FiCloud,
  FiServer,
  FiDatabase
} from 'react-icons/fi';
import { FaWhatsapp, FaTelegram, FaDiscord } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const [currentTime, setCurrentTime] = useState('');
  const [typingStatus, setTypingStatus] = useState('Available for projects');

  useEffect(() => {
    // Update current time
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      }));
    };

    updateTime();
    const timer = setInterval(updateTime, 60000);

    // Typing status animation
    const statuses = [
      'Available for projects',
      'Open to collaboration',
      'Discussing infrastructure',
      'Reviewing cloud solutions',
      'Automating deployments'
    ];
    
    let currentIndex = 0;
    const statusInterval = setInterval(() => {
      setTypingStatus(statuses[currentIndex]);
      currentIndex = (currentIndex + 1) % statuses.length;
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(statusInterval);
    };
  }, []);

  const contactMethods = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'alex@devops.com',
      link: 'mailto:alex@devops.com',
      color: '#64ffda'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      value: 'San Francisco, CA',
      color: '#4a6cf7'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: '#ff6b6b'
    },
    {
      icon: <FiClock />,
      title: 'Current Time',
      value: currentTime,
      color: '#ffd166'
    }
  ];

  const socialLinks = [
    { icon: <FiGithub />, label: 'GitHub', url: 'https://github.com', color: '#333' },
    { icon: <FiLinkedin />, label: 'LinkedIn', url: 'https://linkedin.com', color: '#0077b5' },
    { icon: <FiTwitter />, label: 'Twitter', url: 'https://twitter.com', color: '#1da1f2' },
    { icon: <FaWhatsapp />, label: 'WhatsApp', url: 'https://wa.me/', color: '#25d366' },
    { icon: <FaTelegram />, label: 'Telegram', url: 'https://t.me/', color: '#0088cc' },
    { icon: <FaDiscord />, label: 'Discord', url: 'https://discord.com', color: '#7289da' },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    // Simulate API call
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% success rate for simulation
      
      if (success) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus({ submitting: false, submitted: false, error: null });
        }, 5000);
      } else {
        setStatus({ 
          submitting: false, 
          submitted: false, 
          error: 'Failed to send message. Please try again.' 
        });
      }
    }, 1500);
  };

  const quickReplies = [
    'Need infrastructure consultation?',
    'Interested in cloud migration?',
    'Want to discuss automation?',
    'Looking for DevOps expertise?'
  ];

  return (
    <section id="contact" style={styles.contact}>
      {/* Animated Background */}
      <div style={styles.animatedBackground}>
        <div style={styles.floatingElement}></div>
        <div style={styles.floatingElement2}></div>
      </div>

      <div style={styles.container}>
        {/* Section Header */}
        <div style={styles.sectionHeader}>
          <div style={styles.sectionBadge}>
            <FiMessageSquare style={{ marginRight: '8px' }} />
            GET IN TOUCH
          </div>
          <h2 style={styles.sectionTitle}>
            Let's Build Something
            <span style={styles.sectionSubtitle}>Awesome Together</span>
          </h2>
          <p style={styles.sectionDescription}>
            Have a project in mind? Let's discuss how we can optimize your infrastructure, 
            automate processes, and scale your systems efficiently.
          </p>
        </div>

        <div style={styles.contentWrapper}>
          {/* Left Column - Contact Info */}
          <div style={styles.leftColumn}>
            {/* Status Card */}
            <div style={styles.statusCard}>
              <div style={styles.statusHeader}>
                <div style={styles.statusIndicator}>
                  <div style={styles.statusDot}></div>
                  <span style={styles.statusText}>Currently Online</span>
                </div>
                <div style={styles.typingStatus}>
                  <FiTerminal style={{ marginRight: '8px' }} />
                  {typingStatus}
                </div>
              </div>
              <div style={styles.statusMetrics}>
                <div style={styles.metric}>
                  <FiCloud style={styles.metricIcon} />
                  <div>
                    <div style={styles.metricValue}>~2 hours</div>
                    <div style={styles.metricLabel}>Avg. Response Time</div>
                  </div>
                </div>
                <div style={styles.metric}>
                  <FiServer style={styles.metricIcon} />
                  <div>
                    <div style={styles.metricValue}>24/7</div>
                    <div style={styles.metricLabel}>Monitoring</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div style={styles.contactMethodsCard}>
              <h3 style={styles.cardTitle}>Contact Information</h3>
              <div style={styles.contactMethods}>
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    style={styles.contactMethod}
                    target={method.link ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    <div style={{
                      ...styles.methodIcon,
                      backgroundColor: `${method.color}20`,
                      borderColor: method.color,
                    }}>
                      <span style={{ color: method.color }}>
                        {method.icon}
                      </span>
                    </div>
                    <div style={styles.methodInfo}>
                      <div style={styles.methodTitle}>{method.title}</div>
                      <div style={styles.methodValue}>{method.value}</div>
                    </div>
                    {method.link && (
                      <FiChevronRight style={styles.methodArrow} />
                    )}
                  </a>
                ))}
              </div>
            </div>

          
          </div>

          {/* Right Column - Contact Form */}
          <div style={styles.rightColumn}>
            <div style={styles.contactFormCard}>
              <div style={styles.formHeader}>
                <h3 style={styles.formTitle}>Send a Message</h3>
                <p style={styles.formSubtitle}>
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form style={styles.contactForm} onSubmit={handleSubmit}>
                <div style={styles.formRow}>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>
                      <FiMessageSquare style={{ marginRight: '8px' }} />
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="chinmaya Doe"
                      value={formData.name}
                      onChange={handleChange}
                      style={styles.formInput}
                      required
                      disabled={status.submitting}
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>
                      <FiMail style={{ marginRight: '8px' }} />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="chinmaya@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={styles.formInput}
                      required
                      disabled={status.submitting}
                    />
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>
                    <FiTerminal style={{ marginRight: '8px' }} />
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry / Consultation"
                    value={formData.subject}
                    onChange={handleChange}
                    style={styles.formInput}
                    required
                    disabled={status.submitting}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>
                    <FiDatabase style={{ marginRight: '8px' }} />
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Describe your project, timeline, and requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    style={styles.formTextarea}
                    rows="6"
                    required
                    disabled={status.submitting}
                  />
                </div>

                {/* Status Messages */}
                {status.submitting && (
                  <div style={styles.statusMessage}>
                    <div style={styles.loadingSpinner}></div>
                    <span style={styles.loadingText}>Sending your message...</span>
                  </div>
                )}

                {status.submitted && (
                  <div style={styles.successMessage}>
                    <FiCheckCircle style={{ marginRight: '10px', fontSize: '20px' }} />
                    <div>
                      <div style={styles.successTitle}>Message Sent Successfully!</div>
                      <div style={styles.successText}>
                        I'll get back to you within 24 hours. Thank you!
                      </div>
                    </div>
                  </div>
                )}

                {status.error && (
                  <div style={styles.errorMessage}>
                    <FiAlertCircle style={{ marginRight: '10px', fontSize: '20px' }} />
                    <div>
                      <div style={styles.errorTitle}>Something went wrong</div>
                      <div style={styles.errorText}>{status.error}</div>
                    </div>
                  </div>
                )}

                <button 
                  type="submit" 
                  style={{
                    ...styles.submitButton,
                    backgroundColor: status.submitting ? '#8892b0' : '#64ffda',
                    cursor: status.submitting ? 'not-allowed' : 'pointer',
                  }}
                  disabled={status.submitting}
                >
                  {status.submitting ? (
                    <>
                      <div style={styles.buttonSpinner}></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend style={{ marginRight: '10px' }} />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Form Footer */}
              <div style={styles.formFooter}>
                <div style={styles.footerItem}>
                  <FiClock style={{ marginRight: '8px', color: '#64ffda' }} />
                  <span>Response Time: 2-24 hours</span>
                </div>
                <div style={styles.footerItem}>
                  <FiCheckCircle style={{ marginRight: '8px', color: '#64ffda' }} />
                  <span>Confidentiality Guaranteed</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  contact: {
    backgroundColor: '#0a192f',
    padding: '120px 20px',
    position: 'relative',
    overflow: 'hidden',
  },
  animatedBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  floatingElement: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(100, 255, 218, 0.05) 0%, transparent 70%)',
    top: '10%',
    left: '10%',
    animation: 'float 25s infinite ease-in-out',
  },
  floatingElement2: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(74, 108, 247, 0.05) 0%, transparent 70%)',
    bottom: '10%',
    right: '10%',
    animation: 'float 20s infinite ease-in-out reverse',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  sectionBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    color: '#64ffda',
    padding: '8px 20px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '20px',
    border: '1px solid rgba(100, 255, 218, 0.2)',
  },
  sectionTitle: {
    fontSize: '48px',
    fontWeight: '700',
    color: '#e6f1ff',
    marginBottom: '15px',
    lineHeight: '1.2',
  },
  sectionSubtitle: {
    display: 'block',
    fontSize: '18px',
    color: '#8892b0',
    fontWeight: '400',
    marginTop: '10px',
  },
  sectionDescription: {
    fontSize: '18px',
    color: '#8892b0',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.8',
  },
  contentWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr',
    gap: '40px',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  statusCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    padding: '25px',
    backdropFilter: 'blur(10px)',
  },
  statusHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  statusIndicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  statusDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#64ffda',
    animation: 'pulse 2s infinite',
  },
  statusText: {
    fontSize: '14px',
    color: '#64ffda',
    fontWeight: '500',
  },
  typingStatus: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '13px',
    color: '#8892b0',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    padding: '6px 12px',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  statusMetrics: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  metric: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  metricIcon: {
    color: '#64ffda',
    fontSize: '20px',
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  metricValue: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#e6f1ff',
    marginBottom: '2px',
  },
  metricLabel: {
    fontSize: '12px',
    color: '#8892b0',
  },
  contactMethodsCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    padding: '25px',
    backdropFilter: 'blur(10px)',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#e6f1ff',
    marginBottom: '25px',
  },
  contactMethods: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  contactMethod: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    textDecoration: 'none',
    padding: '15px',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease',
  },
  methodIcon: {
    width: '45px',
    height: '45px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    border: '2px solid',
  },
  methodInfo: {
    flex: 1,
  },
  methodTitle: {
    fontSize: '13px',
    color: '#8892b0',
    marginBottom: '4px',
  },
  methodValue: {
    fontSize: '15px',
    fontWeight: '500',
    color: '#ccd6f6',
  },
  methodArrow: {
    color: '#8892b0',
    fontSize: '18px',
  },
  socialCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    padding: '25px',
    backdropFilter: 'blur(10px)',
  },
  socialGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
  },
  socialLink: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px',
    borderRadius: '10px',
    textDecoration: 'none',
    border: '1px solid',
    transition: 'all 0.3s ease',
    minHeight: '80px',
  },
  socialLabel: {
    fontSize: '12px',
    color: '#ccd6f6',
    marginTop: '8px',
    fontWeight: '500',
  },
  quickRepliesCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    padding: '25px',
    backdropFilter: 'blur(10px)',
  },
  quickReplies: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  quickReply: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 15px',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    color: '#8892b0',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'left',
    border: 'none',
  },
  replyArrow: {
    color: '#8892b0',
    fontSize: '16px',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  contactFormCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    padding: '30px',
    backdropFilter: 'blur(10px)',
  },
  formHeader: {
    marginBottom: '30px',
  },
  formTitle: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#e6f1ff',
    marginBottom: '10px',
  },
  formSubtitle: {
    fontSize: '15px',
    color: '#8892b0',
    lineHeight: '1.6',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  formLabel: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: '500',
    color: '#ccd6f6',
  },
  formInput: {
    padding: '14px 16px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    fontSize: '15px',
    color: '#e6f1ff',
    transition: 'all 0.3s ease',
  },
  formTextarea: {
    padding: '14px 16px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    fontSize: '15px',
    color: '#e6f1ff',
    resize: 'vertical',
    minHeight: '120px',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit',
  },
  submitButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    backgroundColor: '#64ffda',
    color: '#0a192f',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '10px',
  },
  buttonSpinner: {
    width: '16px',
    height: '16px',
    border: '2px solid #0a192f',
    borderTopColor: 'transparent',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    marginRight: '10px',
  },
  statusMessage: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  loadingSpinner: {
    width: '20px',
    height: '20px',
    border: '2px solid #64ffda',
    borderTopColor: 'transparent',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  loadingText: {
    color: '#64ffda',
    fontSize: '14px',
  },
  successMessage: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '15px',
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    borderRadius: '8px',
    border: '1px solid rgba(100, 255, 218, 0.3)',
  },
  successTitle: {
    color: '#64ffda',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '2px',
  },
  successText: {
    color: '#8892b0',
    fontSize: '13px',
  },
  errorMessage: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '15px',
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
    borderRadius: '8px',
    border: '1px solid rgba(255, 107, 107, 0.3)',
  },
  errorTitle: {
    color: '#ff6b6b',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '2px',
  },
  errorText: {
    color: '#8892b0',
    fontSize: '13px',
  },
  formFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '25px',
    paddingTop: '20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
  footerItem: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '13px',
    color: '#8892b0',
  },
  availabilityNote: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    padding: '20px',
    backdropFilter: 'blur(10px)',
  },
  noteIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '10px',
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#64ffda',
    fontSize: '24px',
  },
  noteContent: {
    flex: 1,
  },
  noteTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#e6f1ff',
    marginBottom: '5px',
  },
  noteText: {
    fontSize: '14px',
    color: '#8892b0',
    lineHeight: '1.6',
  },
};

// Add animations
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`, styleSheet.cssRules.length);

// Focus styles
styleSheet.insertRule(`
  .form-input:focus, .form-textarea:focus {
    outline: none;
    border-color: #64ffda !important;
    background-color: rgba(100, 255, 218, 0.05) !important;
  }
`, styleSheet.cssRules.length);

// Hover effects
styleSheet.insertRule(`
  .contact-method:hover {
    background-color: rgba(100, 255, 218, 0.05) !important;
    border-color: rgba(100, 255, 218, 0.2) !important;
    transform: translateY(-2px);
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  .social-link:hover {
    background-color: rgba(100, 255, 218, 0.1) !important;
    transform: translateY(-2px);
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  .quick-reply:hover {
    background-color: rgba(100, 255, 218, 0.1) !important;
    border-color: rgba(100, 255, 218, 0.3) !important;
    color: #64ffda !important;
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  .submit-button:hover:not(:disabled) {
    background-color: #52e0c4 !important;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px -10px rgba(100, 255, 218, 0.3);
  }
`, styleSheet.cssRules.length);

export default Contact;