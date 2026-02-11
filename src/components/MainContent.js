import React, { useState } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiCloud, FiServer, FiCpu, FiDatabase, FiTerminal, FiDownload, FiBox, FiCode, FiLayers, FiGrid } from 'react-icons/fi';
import { FaAws, FaDocker, FaPython, FaJenkins, FaGitAlt, FaNodeJs, FaReact, FaLinux, FaDatabase as FaDatabaseSolid } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiPrometheus, SiGrafana, SiApachekafka, SiRedis, SiPostgresql, SiMongodb } from 'react-icons/si';

const MainContent = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

 const techStack = [
    { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
    { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
    { name: 'Terraform', icon: <SiTerraform />, color: '#7B42BC' },
    { name: 'Ansible', icon: <SiAnsible />, color: '#EE0000' },
    { name: 'Jenkins', icon: <FaJenkins />, color: '#D24939' },
    { name: 'Prometheus', icon: <SiPrometheus />, color: '#E6522C' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
  ];


  const certifications = [
    'AWS Certified Solutions Architect',
    'Certified Kubernetes Administrator',
    'Terraform Associate',
    'Docker Certified Associate',
  ];

  return (
    <section id="home" style={styles.hero}>
      {/* Animated Background Elements */}
      <div style={styles.animatedBackground}>
        <div style={styles.floatingElement}></div>
        <div style={styles.floatingElement2}></div>
      </div>

      <div style={styles.container}>
        {/* Left Content */}
        <div style={styles.heroContent}>
          <div style={styles.badge}>🚀 DevOps Engineer</div>
          
          <h1 style={styles.heroTitle}>
            Hi, I'm <span style={styles.highlight}>Chinmaya</span>
            <div style={styles.typewriter}>
              Building Scalable Cloud Infrastructure
            </div>
          </h1>
          
          <p style={styles.heroSubtitle}>
            I architect, automate, and optimize cloud-native solutions that scale. 
            Specializing in AWS, Kubernetes, and Infrastructure as Code.
          </p>

          {/* Tech Stack Icons */}
          <div style={styles.techIcons}>
            {techStack.map((tech, index) => (
              <div 
                key={index}
                style={{
                  ...styles.techIcon,
                  transform: hoveredSkill === index ? 'translateY(-5px)' : 'none',
                }}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div style={{ fontSize: '24px', color: tech.color }}>
                  {tech.icon}
                </div>
                <div style={styles.techTooltip}>{tech.name}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div style={styles.heroButtons}>
            <button 
              style={styles.primaryButton}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FiTerminal style={{ marginRight: '8px' }} />
              View Projects
            </button>
            
            <button 
              style={styles.secondaryButton}
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <FiDownload style={{ marginRight: '8px' }} />
              Download Resume
            </button>
          </div>

          {/* Quick Stats */}
          <div style={styles.statsContainer}>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>50+</div>
              <div style={styles.statLabel}>Projects Deployed</div>
            </div>
            <div style={styles.statDivider}></div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>99.9%</div>
              <div style={styles.statLabel}>Uptime</div>
            </div>
            <div style={styles.statDivider}></div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>24/7</div>
              <div style={styles.statLabel}>Monitoring</div>
            </div>
          </div>

          {/* Social Links */}
          <div style={styles.socialLinks}>
            <a href="https://github.com" style={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <FiGithub /> GitHub
            </a>
            <a href="https://linkedin.com" style={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <FiLinkedin /> LinkedIn
            </a>
            <a href="https://twitter.com" style={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <FiTwitter /> Twitter
            </a>
            <a href="mailto:alex@devops.com" style={styles.socialLink}>
              <FiMail /> Email
            </a>
          </div>
        </div>

        {/* Right Side - Terminal/Cloud Visualization */}
        <div style={styles.heroVisual}>
          {/* Terminal Window */}
          <div style={styles.terminalWindow}>
            <div style={styles.terminalHeader}>
              <div style={styles.terminalDots}>
                <span style={styles.dotRed}></span>
                <span style={styles.dotYellow}></span>
                <span style={styles.dotGreen}></span>
              </div>
              <div style={styles.terminalTitle}>bash — 80×24</div>
            </div>
            <div style={styles.terminalBody}>
              <pre style={styles.terminalCode}>
                <code>
{`$ kubectl get pods --all-namespaces
NAMESPACE    NAME                    READY   STATUS
production   web-app-1               1/1     Running
production   api-gateway-1           1/1     Running
monitoring   prometheus-1            1/1     Running

$ terraform plan
Plan: 3 to add, 0 to change, 0 to destroy.

$ docker ps
CONTAINER ID   STATUS    PORTS     NAMES
a1b2c3d4       Up 2 days 0.0.0.0:80->80/tcp nginx

$ uptime
 14:30:45 up 365 days, 23:45, load average: 0.08, 0.03, 0.01`}
                </code>
              </pre>
            </div>
          </div>

          {/* Cloud Architecture Visualization */}
          <div style={styles.cloudVisual}>
            <div style={styles.cloudElement}>
              <FiCloud style={styles.cloudIcon} />
              <span style={styles.cloudLabel}>AWS Cloud</span>
            </div>
            <div style={styles.connectionLine}></div>
            <div style={styles.containerElement}>
              <FiServer style={styles.containerIcon} />
              <span style={styles.containerLabel}>K8s Cluster</span>
            </div>
            <div style={styles.connectionLine}></div>
            <div style={styles.databaseElement}>
              <FiDatabase style={styles.databaseIcon} />
              <span style={styles.databaseLabel}>RDS</span>
            </div>
          </div>

          {/* Certifications Badges */}
          <div style={styles.certifications}>
            <h4 style={styles.certTitle}>Certifications</h4>
            <div style={styles.certList}>
              {certifications.map((cert, index) => (
                <div key={index} style={styles.certBadge}>
                  <FiCpu style={{ marginRight: '8px' }} />
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={styles.scrollIndicator}>
        <div style={styles.mouse}>
          <div style={styles.wheel}></div>
        </div>
        <span style={styles.scrollText}>Scroll to explore</span>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    backgroundColor: '#0a192f',
    minHeight: '100vh',
    padding: '80px 20px',
    position: 'relative',
    overflow: 'hidden',
    color: '#ccd6f6',
  },
  animatedBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  floatingElement: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, transparent 70%)',
    top: '-100px',
    right: '-100px',
    animation: 'float 20s infinite ease-in-out',
  },
  floatingElement2: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(74, 108, 247, 0.1) 0%, transparent 70%)',
    bottom: '-50px',
    left: '-50px',
    animation: 'float 15s infinite ease-in-out reverse',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: '60px',
    position: 'relative',
    zIndex: 1,
  },
  heroContent: {
    flex: 1,
  },
  badge: {
    display: 'inline-block',
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    color: '#64ffda',
    padding: '8px 20px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '30px',
    border: '1px solid rgba(100, 255, 218, 0.2)',
  },
  heroTitle: {
    fontSize: '56px',
    fontWeight: '700',
    lineHeight: '1.2',
    marginBottom: '20px',
    color: '#e6f1ff',
  },
  highlight: {
    color: '#64ffda',
    display: 'inline-block',
    position: 'relative',
  },
  typewriter: {
    fontSize: '24px',
    color: '#8892b0',
    marginTop: '10px',
    fontWeight: '400',
    position: 'relative',
    overflow: 'hidden',
    borderRight: '3px solid #64ffda',
    whiteSpace: 'nowrap',
    animation: 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
  },
  heroSubtitle: {
    fontSize: '18px',
    color: '#8892b0',
    lineHeight: '1.8',
    maxWidth: '600px',
    marginBottom: '40px',
  },
  techIcons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    marginBottom: '40px',
  },
  techIcon: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
  },
  techTooltip: {
    position: 'absolute',
    bottom: '-30px',
    backgroundColor: '#64ffda',
    color: '#0a192f',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '600',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    whiteSpace: 'nowrap',
  },
  heroButtons: {
    display: 'flex',
    gap: '15px',
    marginBottom: '40px',
  },
  primaryButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#64ffda',
    color: '#0a192f',
    padding: '14px 32px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 30px -15px rgba(100, 255, 218, 0.3)',
  },
  secondaryButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: '#64ffda',
    padding: '14px 32px',
    border: '1px solid #64ffda',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  },
  statsContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '40px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  statItem: {
    flex: 1,
    textAlign: 'center',
  },
  statNumber: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#64ffda',
    marginBottom: '5px',
  },
  statLabel: {
    fontSize: '14px',
    color: '#8892b0',
  },
  statDivider: {
    width: '1px',
    height: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  socialLinks: {
    display: 'flex',
    gap: '25px',
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#ccd6f6',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'color 0.3s ease',
  },
  heroVisual: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  terminalWindow: {
    backgroundColor: '#1e1e1e',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
  },
  terminalHeader: {
    backgroundColor: '#2d2d2d',
    padding: '10px 15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  terminalDots: {
    display: 'flex',
    gap: '8px',
  },
  dotRed: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#ff5f56',
  },
  dotYellow: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#ffbd2e',
  },
  dotGreen: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#27ca3f',
  },
  terminalTitle: {
    color: '#888',
    fontSize: '12px',
  },
  terminalBody: {
    padding: '20px',
  },
  terminalCode: {
    margin: 0,
    fontSize: '12px',
    lineHeight: '1.6',
    color: '#f8f8f2',
    fontFamily: 'Monaco, "Courier New", monospace',
  },
  cloudVisual: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  cloudElement: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  cloudIcon: {
    fontSize: '32px',
    color: '#FF9900',
  },
  cloudLabel: {
    fontSize: '12px',
    color: '#8892b0',
  },
  connectionLine: {
    flex: 1,
    height: '2px',
    backgroundColor: 'rgba(100, 255, 218, 0.3)',
  },
  containerElement: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  containerIcon: {
    fontSize: '32px',
    color: '#326CE5',
  },
  containerLabel: {
    fontSize: '12px',
    color: '#8892b0',
  },
  databaseElement: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  databaseIcon: {
    fontSize: '32px',
    color: '#64ffda',
  },
  databaseLabel: {
    fontSize: '12px',
    color: '#8892b0',
  },
  certifications: {
    backgroundColor: 'rgba(100, 255, 218, 0.05)',
    padding: '20px',
    borderRadius: '10px',
    border: '1px solid rgba(100, 255, 218, 0.1)',
  },
  certTitle: {
    color: '#64ffda',
    marginBottom: '15px',
    fontSize: '16px',
  },
  certList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  certBadge: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    padding: '10px 15px',
    borderRadius: '5px',
    fontSize: '14px',
    color: '#ccd6f6',
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  mouse: {
    width: '30px',
    height: '50px',
    border: '2px solid #64ffda',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '10px',
  },
  wheel: {
    width: '4px',
    height: '10px',
    backgroundColor: '#64ffda',
    borderRadius: '2px',
    animation: 'scroll 2s infinite',
  },
  scrollText: {
    color: '#64ffda',
    fontSize: '12px',
    letterSpacing: '2px',
  },
};

// Add keyframes for animations
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #64ffda }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes scroll {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(20px); opacity: 0; }
  }
`, styleSheet.cssRules.length);

export default MainContent;