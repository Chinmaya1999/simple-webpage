import React, { useState, useEffect } from 'react';
import { 
  FiTerminal, 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiMail, 
  FiChevronUp,
  FiHeart,
  FiCoffee,
  FiCode,
  FiServer,
  FiCloud,
  FiGlobe,
  FiCalendar,
  FiClock,
  FiMessageSquare
} from 'react-icons/fi';
import { FaDev, FaStackOverflow, FaMedium, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [uptime, setUptime] = useState('99.99%');
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Update year
    setCurrentYear(new Date().getFullYear());
    
    // Show back to top button on scroll
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Simulate visitor counter
    const visitorInterval = setInterval(() => {
      setVisitorCount(prev => {
        const increment = Math.floor(Math.random() * 3) + 1;
        return prev + increment;
      });
    }, 5000);
    
    // Simulate uptime monitoring
    const uptimeInterval = setInterval(() => {
      const values = ['99.99%', '100%', '99.98%'];
      const randomValue = values[Math.floor(Math.random() * values.length)];
      setUptime(randomValue);
    }, 10000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(visitorInterval);
      clearInterval(uptimeInterval);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#home', icon: <FiTerminal /> },
    { label: 'About', href: '#about', icon: <FiServer /> },
    { label: 'Projects', href: '#projects', icon: <FiCode /> },
    { label: 'Skills', href: '#skills', icon: <FiCloud /> },
    { label: 'Contact', href: '#contact', icon: <FiMessageSquare /> },
  ];

  const techStack = [
    'AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 
    'Python', 'Git', 'Ansible', 'Prometheus', 'Grafana'
  ];

  const socialLinks = [
    { icon: <FiGithub />, label: 'GitHub', url: 'https://github.com', color: '#f0f6fc' },
    { icon: <FiLinkedin />, label: 'LinkedIn', url: 'https://linkedin.com', color: '#0a66c2' },
    { icon: <FiTwitter />, label: 'Twitter', url: 'https://twitter.com', color: '#1da1f2' },
    { icon: <FaDev />, label: 'Dev.to', url: 'https://dev.to', color: '#0a0a0a' },
    { icon: <FaStackOverflow />, label: 'Stack Overflow', url: 'https://stackoverflow.com', color: '#f48024' },
    { icon: <FaMedium />, label: 'Medium', url: 'https://medium.com', color: '#000000' },
    { icon: <FaYoutube />, label: 'YouTube', url: 'https://youtube.com', color: '#ff0000' },
    { icon: <FiMail />, label: 'Newsletter', url: '#contact', color: '#64ffda' },
  ];

  const stats = [
    { label: 'Site Uptime', value: uptime, icon: <FiServer /> },
    { label: 'Visitors Today', value: `${visitorCount}+`, icon: <FiGlobe /> },
    { label: 'Response Time', value: '< 24h', icon: <FiClock /> },
    { label: 'Last Updated', value: 'Today', icon: <FiCalendar /> },
  ];

  return (
    <>
      {/* Back to Top Button */}
      {showBackToTop && (
        <button 
          style={styles.backToTop}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FiChevronUp />
        </button>
      )}

      <footer style={styles.footer}>
        {/* Top Section */}
        <div style={styles.footerTop}>
          <div style={styles.footerContainer}>
            {/* Brand Section */}
            <div style={styles.brandSection}>
              <div style={styles.brandLogo}>
                <div style={styles.logoIcon}>
                  <FiTerminal />
                </div>
                <div style={styles.brandText}>
                  <h3 style={styles.brandName}>Chinmaya</h3>
                  <p style={styles.brandTagline}>DevOps & Cloud Engineer</p>
                </div>
              </div>
              <p style={styles.brandDescription}>
                Building scalable infrastructure, automating deployments, 
                and optimizing cloud solutions for modern applications.
              </p>
              <div style={styles.techTags}>
                {techStack.map((tech, index) => (
                  <span key={index} style={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div style={styles.linksSection}>
              <h4 style={styles.sectionTitle}>Quick Links</h4>
              <div style={styles.quickLinks}>
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    style={styles.quickLink}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span style={styles.linkIcon}>{link.icon}</span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div style={styles.socialSection}>
              <h4 style={styles.sectionTitle}>Connect</h4>
              <div style={styles.socialGrid}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    style={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <span style={{ color: social.color, fontSize: '18px' }}>
                      {social.icon}
                    </span>
                    <span style={styles.socialLabel}>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div style={styles.statsSection}>
              <h4 style={styles.sectionTitle}>Live Stats</h4>
              <div style={styles.statsGrid}>
                {stats.map((stat, index) => (
                  <div key={index} style={styles.statItem}>
                    <div style={styles.statIcon}>
                      {stat.icon}
                    </div>
                    <div style={styles.statContent}>
                      <div style={styles.statValue}>{stat.value}</div>
                      <div style={styles.statLabel}>{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div style={styles.footerMiddle}>
          <div style={styles.footerContainer}>
            <div style={styles.newsletterSection}>
              <div style={styles.newsletterContent}>
                <h4 style={styles.newsletterTitle}>
                  <FiMail style={{ marginRight: '10px' }} />
                  DevOps Insights Newsletter
                </h4>
                <p style={styles.newsletterText}>
                  Get weekly tips on cloud infrastructure, automation, and DevOps best practices.
                </p>
              </div>
              <div style={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  style={styles.newsletterInput}
                />
                <button style={styles.newsletterButton}>
                  Subscribe
                  <FiChevronUp style={{ transform: 'rotate(90deg)', marginLeft: '8px' }} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={styles.footerBottom}>
          <div style={styles.footerContainer}>
            <div style={styles.copyrightSection}>
              <p style={styles.copyrightText}>
                © {currentYear} Chinmaya. All rights reserved.
              </p>
              <div style={styles.credits}>
                <span style={styles.creditItem}>
                  <FiCode style={{ marginRight: '6px' }} />
                  Built with React & Node.js
                </span>
                <span style={styles.creditItem}>
                  <FiServer style={{ marginRight: '6px' }} />
                  Hosted on AWS
                </span>
                <span style={styles.creditItem}>
                  <FiCoffee style={{ marginRight: '6px' }} />
                  Fueled by coffee
                </span>
              </div>
            </div>

            <div style={styles.legalLinks}>
              <a href="#" style={styles.legalLink}>Privacy Policy</a>
              <span style={styles.separator}>•</span>
              <a href="#" style={styles.legalLink}>Terms of Service</a>
              <span style={styles.separator}>•</span>
              <a href="#" style={styles.legalLink}>Cookie Policy</a>
              <span style={styles.separator}>•</span>
              <a href="#" style={styles.legalLink}>Security</a>
            </div>
          </div>

          {/* Made With Love */}
          <div style={styles.madeWith}>
            <div style={styles.madeWithContent}>
              <FiHeart style={{ color: '#ff6b6b', marginRight: '8px' }} />
              chinmaya
              <span style={styles.heartbeat}> ♥</span>
            </div>
          </div>
        </div>

        {/* Terminal Status Bar */}
      </footer>
    </>
  );
};

const styles = {
  backToTop: {
    position: 'fixed',
    bottom: '100px',
    right: '30px',
    width: '50px',
    height: '50px',
    backgroundColor: '#64ffda',
    color: '#0a192f',
    border: 'none',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    cursor: 'pointer',
    zIndex: 1000,
    boxShadow: '0 10px 30px rgba(100, 255, 218, 0.3)',
    transition: 'all 0.3s ease',
    opacity: 0,
    animation: 'fadeIn 0.3s ease forwards',
  },
  footer: {
    backgroundColor: '#0c1a2d',
    color: '#ccd6f6',
    position: 'relative',
    overflow: 'hidden',
  },
  footerTop: {
    padding: '80px 20px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  footerContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    gap: '50px',
  },
  brandSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  brandLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '15px',
  },
  logoIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '10px',
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#64ffda',
    fontSize: '24px',
    border: '2px solid rgba(100, 255, 218, 0.2)',
  },
  brandText: {
    display: 'flex',
    flexDirection: 'column',
  },
  brandName: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#e6f1ff',
    margin: 0,
  },
  brandTagline: {
    fontSize: '14px',
    color: '#64ffda',
    margin: '4px 0 0 0',
    opacity: 0.9,
  },
  brandDescription: {
    fontSize: '15px',
    color: '#8892b0',
    lineHeight: '1.7',
    marginBottom: '20px',
  },
  techTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  techTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#8892b0',
    padding: '6px 12px',
    borderRadius: '15px',
    fontSize: '12px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease',
  },
  linksSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#e6f1ff',
    marginBottom: '25px',
    position: 'relative',
  },
  quickLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  quickLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#8892b0',
    textDecoration: 'none',
    fontSize: '15px',
    transition: 'all 0.3s ease',
    padding: '8px 0',
  },
  linkIcon: {
    color: '#64ffda',
    fontSize: '16px',
    width: '20px',
  },
  socialSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  socialGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    padding: '12px',
    borderRadius: '8px',
    textDecoration: 'none',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease',
  },
  socialLabel: {
    fontSize: '13px',
    color: '#ccd6f6',
    fontWeight: '500',
  },
  statsSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  statIcon: {
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#64ffda',
    fontSize: '16px',
  },
  statContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  statValue: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#e6f1ff',
    marginBottom: '2px',
  },
  statLabel: {
    fontSize: '11px',
    color: '#8892b0',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  footerMiddle: {
    padding: '40px 20px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
  },
  newsletterSection: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '40px',
  },
  newsletterContent: {
    flex: 1,
  },
  newsletterTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#e6f1ff',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  newsletterText: {
    fontSize: '15px',
    color: '#8892b0',
    lineHeight: '1.6',
  },
  newsletterForm: {
    display: 'flex',
    gap: '10px',
    flexShrink: 0,
  },
  newsletterInput: {
    padding: '14px 20px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    fontSize: '15px',
    color: '#e6f1ff',
    minWidth: '300px',
    transition: 'all 0.3s ease',
  },
  newsletterButton: {
    padding: '14px 30px',
    backgroundColor: '#64ffda',
    color: '#0a192f',
    border: 'none',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease',
  },
  footerBottom: {
    padding: '40px 20px',
    backgroundColor: 'rgba(10, 25, 47, 0.8)',
  },
  copyrightSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
  },
  copyrightText: {
    fontSize: '14px',
    color: '#8892b0',
  },
  credits: {
    display: 'flex',
    gap: '20px',
  },
  creditItem: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '13px',
    color: '#8892b0',
  },
  legalLinks: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px',
  },
  legalLink: {
    color: '#8892b0',
    textDecoration: 'none',
    fontSize: '13px',
    transition: 'all 0.3s ease',
  },
  separator: {
    color: '#8892b0',
    fontSize: '12px',
    opacity: 0.5,
  },
  madeWith: {
    textAlign: 'center',
    padding: '20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  },
  madeWithContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    color: '#8892b0',
  },
  heartbeat: {
    color: '#ff6b6b',
    animation: 'heartbeat 1.5s ease infinite',
  },
  terminalBar: {
    backgroundColor: '#0a0a0a',
    padding: '12px 20px',
    borderTop: '1px solid rgba(100, 255, 218, 0.1)',
  },
  terminalContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  terminalText: {
    fontFamily: 'Monaco, "Courier New", monospace',
    fontSize: '13px',
    color: '#64ffda',
  },
  prompt: {
    color: '#64ffda',
    marginRight: '10px',
  },
  command: {
    color: '#f8f8f2',
  },
  statusIndicators: {
    display: 'flex',
    gap: '20px',
  },
  statusItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '12px',
    color: '#8892b0',
  },
  statusDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#52e0c4',
    animation: 'pulse 2s infinite',
  },
};

// Add animations
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`, styleSheet.cssRules.length);

// Hover effects
styleSheet.insertRule(`
  .back-to-top:hover {
    background-color: #52e0c4 !important;
    transform: translateY(-5px) !important;
    box-shadow: 0 15px 40px rgba(100, 255, 218, 0.4) !important;
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  .tech-tag:hover {
    background-color: rgba(100, 255, 218, 0.1) !important;
    color: #64ffda !important;
    border-color: rgba(100, 255, 218, 0.3) !important;
    transform: translateY(-2px);
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  .quick-link:hover {
    color: #64ffda !important;
    padding-left: 5px !important;
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  .social-link:hover {
    background-color: rgba(100, 255, 218, 0.1) !important;
    border-color: rgba(100, 255, 218, 0.3) !important;
    transform: translateY(-2px);
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  .newsletter-input:focus {
    outline: none;
    border-color: #64ffda !important;
    background-color: rgba(100, 255, 218, 0.05) !important;
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  .newsletter-button:hover {
    background-color: #52e0c4 !important;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px -10px rgba(100, 255, 218, 0.3);
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  .legal-link:hover {
    color: #64ffda !important;
  }
`, styleSheet.cssRules.length);

export default Footer;