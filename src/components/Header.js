import React, { useState, useEffect } from 'react';
import { 
  FiMenu, 
  FiX, 
  FiTerminal, 
  FiCloud, 
  FiServer, 
  FiCode,
  FiChevronDown
} from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active nav based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveNav(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: <FiTerminal /> },
    { id: 'about', label: 'About', icon: <FiCloud /> },
    { id: 'projects', label: 'Projects', icon: <FiServer /> },
    { id: 'skills', label: 'Skills', icon: <FiCode /> },
    { id: 'contact', label: 'Contact', icon: <FiCloud /> },
  ];

  const handleNavClick = (sectionId) => {
    setActiveNav(sectionId);
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav style={{
        ...styles.navbar,
        backgroundColor: scrolled ? 'rgba(10, 25, 47, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(2, 12, 27, 0.7)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
      }}>
        <div style={styles.navContainer}>
          {/* Logo */}
          <div style={styles.logoContainer}>
            <div style={styles.logoIcon}>
              <FiTerminal />
            </div>
            <div>
              <h2 style={styles.logoName}>Chinmaya</h2>
              <p style={styles.tagline}>DevOps & Cloud Engineer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div style={styles.desktopNav}>
            <ul style={styles.navList}>
              {navItems.map((item) => (
                <li key={item.id} style={styles.navItem}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      ...styles.navButton,
                      color: activeNav === item.id ? '#64ffda' : '#ccd6f6',
                      borderBottom: activeNav === item.id ? '2px solid #64ffda' : 'none',
                    }}
                  >
                    <span style={styles.navIcon}>{item.icon}</span>
                    {item.label}
                    {activeNav === item.id && (
                      <span style={styles.activeIndicator}></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <button 
              style={styles.ctaButton}
              onClick={() => handleNavClick('contact')}
            >
              Let's Connect
              <FiChevronDown style={{ marginLeft: '8px' }} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            style={styles.menuButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={styles.mobileMenu}>
          <div style={styles.mobileMenuContent}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  ...styles.mobileNavButton,
                  color: activeNav === item.id ? '#64ffda' : '#ccd6f6',
                }}
              >
                <span style={styles.mobileNavIcon}>{item.icon}</span>
                {item.label}
                {activeNav === item.id && (
                  <span style={styles.mobileActiveIndicator}></span>
                )}
              </button>
            ))}
            <button 
              style={styles.mobileCtaButton}
              onClick={() => handleNavClick('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
      )}

      {/* Status Bar */}
      <div style={styles.statusBar}>
        <div style={styles.statusContainer}>
          <div style={styles.statusItem}>
            <div style={styles.statusDot}></div>
            <span style={styles.statusText}>Available for freelance</span>
          </div>
          <div style={styles.statusItem}>
            <div style={{...styles.statusDot, backgroundColor: '#64ffda'}}></div>
            <span style={styles.statusText}>Online</span>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '0 20px',
    transition: 'all 0.3s ease',
  },
  navContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  logoIcon: {
    fontSize: '32px',
    color: '#64ffda',
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    width: '50px',
    height: '50px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoName: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#e6f1ff',
    margin: 0,
  },
  tagline: {
    fontSize: '12px',
    color: '#8892b0',
    margin: '4px 0 0 0',
    letterSpacing: '1px',
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '30px',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: 0,
  },
  navButton: {
    background: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '15px',
    fontWeight: '500',
    cursor: 'pointer',
    padding: '10px 0',
    position: 'relative',
    transition: 'all 0.3s ease',
    color: '#ccd6f6',
  },
  navIcon: {
    fontSize: '16px',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: '-2px',
    left: '0',
    right: '0',
    height: '2px',
    backgroundColor: '#64ffda',
    animation: 'slideIn 0.3s ease',
  },
  ctaButton: {
    backgroundColor: 'transparent',
    color: '#64ffda',
    border: '1px solid #64ffda',
    borderRadius: '4px',
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    letterSpacing: '1px',
  },
  menuButton: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#64ffda',
    fontSize: '24px',
    cursor: 'pointer',
    padding: '10px',
    zIndex: 1001,
  },
  mobileMenu: {
    position: 'fixed',
    top: '90px',
    left: 0,
    right: 0,
    backgroundColor: 'rgba(10, 25, 47, 0.98)',
    backdropFilter: 'blur(10px)',
    zIndex: 999,
    animation: 'slideDown 0.3s ease',
  },
  mobileMenuContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  mobileNavButton: {
    background: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    fontSize: '18px',
    fontWeight: '500',
    cursor: 'pointer',
    padding: '15px',
    textAlign: 'left',
    position: 'relative',
    transition: 'all 0.3s ease',
    color: '#ccd6f6',
  },
  mobileNavIcon: {
    fontSize: '20px',
    width: '24px',
  },
  mobileActiveIndicator: {
    position: 'absolute',
    left: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '3px',
    height: '20px',
    backgroundColor: '#64ffda',
    borderRadius: '0 2px 2px 0',
  },
  mobileCtaButton: {
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    color: '#64ffda',
    border: '1px solid #64ffda',
    borderRadius: '4px',
    padding: '16px 24px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'all 0.3s ease',
  },
  statusBar: {
    position: 'fixed',
    top: '90px',
    left: 0,
    right: 0,
    backgroundColor: 'rgba(2, 12, 27, 0.8)',
    zIndex: 998,
    padding: '8px 20px',
    display: 'none',
  },
  statusContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
  statusItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  statusDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#ff5f56',
    animation: 'pulse 2s infinite',
  },
  statusText: {
    fontSize: '12px',
    color: '#8892b0',
  },
};

// Add keyframes for animations
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes slideIn {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes slideDown {
    from { transform: translateY(-20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`, styleSheet.cssRules.length);

// Responsive styles
styleSheet.insertRule(`
  @media (max-width: 1024px) {
    .desktop-nav {
      display: none;
    }
    .menu-button {
      display: block;
    }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @media (min-width: 1025px) {
    .mobile-menu {
      display: none !important;
    }
  }
`, styleSheet.cssRules.length);

// Hover effects
styleSheet.insertRule(`
  .nav-button:hover {
    color: #64ffda !important;
    transform: translateY(-2px);
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  .cta-button:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px -10px rgba(100, 255, 218, 0.3);
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  .mobile-nav-button:hover {
    background-color: rgba(100, 255, 218, 0.05);
    padding-left: 25px;
  }
`, styleSheet.cssRules.length);

export default Header;