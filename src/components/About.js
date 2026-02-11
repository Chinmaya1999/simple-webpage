import React, { useState, useEffect } from 'react';
import { 
  FiCpu, 
  FiServer, 
  FiCloud, 
  FiTerminal, 
  FiCode,
  FiDatabase,
  FiGitMerge,
  FiShield,
  FiMapPin,
  FiMail,
  FiCalendar,
  FiAward,
  FiUsers,
  FiGlobe,
  FiZap,
  FiTrendingUp,
  FiClock
} from 'react-icons/fi';
import { 
  FaAws, 
  FaDocker, 
  FaKubernetes, 
  FaPython,
  FaTerraform,
  FaJenkins,
  FaGitAlt,
  FaAnsible
} from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [counterValues, setCounterValues] = useState({
    projects: 0,
    uptime: 0,
    costSavings: 0,
    deployments: 0
  });

 const skills = [
    { name: 'AWS Cloud', icon: <FiCloud />, level: 95, color: '#FF9900' },
    { name: 'Kubernetes', icon: <FiServer />, level: 92, color: '#326CE5' },
    { name: 'Docker', icon: <FiTerminal />, level: 94, color: '#2496ED' },
    { name: 'Terraform', icon: <FiCode />, level: 90, color: '#7B42BC' },
    { name: 'Jenkins CI/CD', icon: <FiCpu />, level: 88, color: '#D24939' },
    { name: 'Python', icon: <FiCode />, level: 85, color: '#3776AB' },
    { name: 'Git', icon: <FiGitMerge />, level: 93, color: '#F1502F' },
    { name: 'Ansible', icon: <FiTerminal />, level: 87, color: '#EE0000' },
  ];

  const experience = [
    {
      company: 'Tech Cloud Solutions',
      role: 'Senior DevOps Engineer',
      period: '2022 - Present',
      achievements: [
        'Led migration of 500+ microservices to Kubernetes',
        'Reduced cloud costs by 40% through optimization',
        'Implemented GitOps workflow reducing deployment time by 85%'
      ]
    },
    {
      company: 'Digital Infrastructure Corp',
      role: 'Cloud Infrastructure Engineer',
      period: '2020 - 2022',
      achievements: [
        'Built multi-cloud infrastructure on AWS and GCP',
        'Automated deployment pipelines saving 30+ hours weekly',
        'Implemented comprehensive monitoring system'
      ]
    },
    {
      company: 'Startup Innovations',
      role: 'DevOps Engineer',
      period: '2018 - 2020',
      achievements: [
        'Setup CI/CD pipeline from scratch',
        'Managed cloud infrastructure for growing startup',
        'Improved system reliability to 99.99% uptime'
      ]
    }
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'Certified Kubernetes Administrator', issuer: 'Cloud Native Computing Foundation', year: '2023' },
    { name: 'Terraform Associate', issuer: 'HashiCorp', year: '2022' },
    { name: 'Docker Certified Associate', issuer: 'Docker', year: '2022' },
  ];

  useEffect(() => {
    const targetValues = { projects: 150, uptime: 99.9, costSavings: 40, deployments: 5000 };
    
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 frames
    const interval = duration / steps;
    
    const counters = {};
    let step = 0;
    
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      Object.keys(targetValues).forEach(key => {
        if (key === 'uptime') {
          counters[key] = (targetValues[key] * progress).toFixed(1);
        } else {
          counters[key] = Math.floor(targetValues[key] * progress);
        }
      });
      
      setCounterValues({ ...counters });
      
      if (step >= steps) {
        clearInterval(timer);
        setCounterValues(targetValues);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" style={styles.about}>
      {/* Animated Background */}
      <div style={styles.animatedBackground}>
        <div style={styles.floatingElement}></div>
        <div style={styles.floatingElement2}></div>
      </div>

      <div style={styles.container}>
        {/* Section Header */}
        <div style={styles.sectionHeader}>
          <div style={styles.sectionBadge}>
            <FiCpu style={{ marginRight: '8px' }} />
            ABOUT ME
          </div>
          <h2 style={styles.sectionTitle}>
            Cloud & DevOps Engineer
            <span style={styles.sectionSubtitle}>Infrastructure Specialist</span>
          </h2>
        </div>

        <div style={styles.contentWrapper}>
          {/* Left Column - Profile & Stats */}
          <div style={styles.leftColumn}>
            {/* Profile Card */}
            <div style={styles.profileCard}>
              <div style={styles.profileImage}>
                <div style={styles.imagePlaceholder}>
                  <FiTerminal style={styles.profileIcon} />
                </div>
              </div>
              <div style={styles.profileInfo}>
                <h3 style={styles.profileName}>Alex Chen</h3>
                <p style={styles.profileTitle}>Senior DevOps Engineer</p>
                <div style={styles.profileStats}>
                  <div style={styles.statItem}>
                    <FiUsers style={styles.statIcon} />
                    <div>
                      <div style={styles.statNumber}>50+</div>
                      <div style={styles.statLabel}>Clients</div>
                    </div>
                  </div>
                  <div style={styles.statItem}>
                    <FiGlobe style={styles.statIcon} />
                    <div>
                      <div style={styles.statNumber}>5+</div>
                      <div style={styles.statLabel}>Years Exp</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div style={styles.infoCard}>
              <h4 style={styles.infoTitle}>Quick Info</h4>
              <div style={styles.infoItems}>
                <div style={styles.infoItem}>
                  <FiMapPin style={styles.infoIcon} />
                  <div>
                    <div style={styles.infoLabel}>Location</div>
                    <div style={styles.infoValue}>San Francisco, CA</div>
                  </div>
                </div>
                <div style={styles.infoItem}>
                  <FiMail style={styles.infoIcon} />
                  <div>
                    <div style={styles.infoLabel}>Email</div>
                    <div style={styles.infoValue}>alex@devops.com</div>
                  </div>
                </div>
                <div style={styles.infoItem}>
                  <FiCalendar style={styles.infoIcon} />
                  <div>
                    <div style={styles.infoLabel}>Availability</div>
                    <div style={styles.infoValue}>Open to Opportunities</div>
                  </div>
                </div>
                <div style={styles.infoItem}>
                  <FiAward style={styles.infoIcon} />
                  <div>
                    <div style={styles.infoLabel}>Certifications</div>
                    <div style={styles.infoValue}>4 Major Certs</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div style={styles.metricsCard}>
              <h4 style={styles.metricsTitle}>Performance Metrics</h4>
              <div style={styles.metricsGrid}>
                <div style={styles.metric}>
                  <div style={styles.metricIcon}>
                    <FiZap />
                  </div>
                  <div>
                    <div style={styles.metricValue}>{counterValues.projects}+</div>
                    <div style={styles.metricLabel}>Projects</div>
                  </div>
                </div>
                <div style={styles.metric}>
                  <div style={styles.metricIcon}>
                    <FiClock />
                  </div>
                  <div>
                    <div style={styles.metricValue}>{counterValues.uptime}%</div>
                    <div style={styles.metricLabel}>Uptime</div>
                  </div>
                </div>
                <div style={styles.metric}>
                  <div style={styles.metricIcon}>
                    <FiTrendingUp />
                  </div>
                  <div>
                    <div style={styles.metricValue}>{counterValues.costSavings}%</div>
                    <div style={styles.metricLabel}>Cost Savings</div>
                  </div>
                </div>
                <div style={styles.metric}>
                  <div style={styles.metricIcon}>
                    <FiCloud />
                  </div>
                  <div>
                    <div style={styles.metricValue}>{counterValues.deployments}</div>
                    <div style={styles.metricLabel}>Deployments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div style={styles.rightColumn}>
            {/* Tabs Navigation */}
            <div style={styles.tabsNavigation}>
              <button
                style={{
                  ...styles.tabButton,
                  backgroundColor: activeTab === 'experience' ? 'rgba(100, 255, 218, 0.1)' : 'transparent',
                  borderBottom: activeTab === 'experience' ? '2px solid #64ffda' : 'none',
                }}
                onClick={() => setActiveTab('experience')}
              >
                <FiServer style={{ marginRight: '8px' }} />
                Experience
              </button>
              <button
                style={{
                  ...styles.tabButton,
                  backgroundColor: activeTab === 'skills' ? 'rgba(100, 255, 218, 0.1)' : 'transparent',
                  borderBottom: activeTab === 'skills' ? '2px solid #64ffda' : 'none',
                }}
                onClick={() => setActiveTab('skills')}
              >
                <FiCode style={{ marginRight: '8px' }} />
                Skills
              </button>
              <button
                style={{
                  ...styles.tabButton,
                  backgroundColor: activeTab === 'certifications' ? 'rgba(100, 255, 218, 0.1)' : 'transparent',
                  borderBottom: activeTab === 'certifications' ? '2px solid #64ffda' : 'none',
                }}
                onClick={() => setActiveTab('certifications')}
              >
                <FiAward style={{ marginRight: '8px' }} />
                Certifications
              </button>
            </div>

            {/* Tabs Content */}
            <div style={styles.tabsContent}>
              {/* Experience Tab */}
              {activeTab === 'experience' && (
                <div style={styles.experienceContent}>
                  <h3 style={styles.contentTitle}>Professional Journey</h3>
                  <p style={styles.introText}>
                    With over 5 years of experience in cloud infrastructure and DevOps, 
                    I specialize in building scalable, reliable, and cost-effective systems. 
                    My expertise spans across AWS, Kubernetes, and automation technologies.
                  </p>
                  
                  <div style={styles.timeline}>
                    {experience.map((exp, index) => (
                      <div key={index} style={styles.timelineItem}>
                        <div style={styles.timelineMarker}>
                          <div style={styles.markerDot}></div>
                          {index < experience.length - 1 && <div style={styles.timelineLine}></div>}
                        </div>
                        <div style={styles.timelineContent}>
                          <div style={styles.timelineHeader}>
                            <h4 style={styles.companyName}>{exp.company}</h4>
                            <span style={styles.period}>{exp.period}</span>
                          </div>
                          <div style={styles.role}>{exp.role}</div>
                          <ul style={styles.achievementsList}>
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} style={styles.achievement}>
                                <div style={styles.achievementDot}></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <div style={styles.skillsContent}>
                  <h3 style={styles.contentTitle}>Technical Expertise</h3>
                  <p style={styles.introText}>
                    Specialized in cloud-native technologies, infrastructure automation, 
                    and DevOps practices. Proficient in designing and implementing 
                    solutions that scale efficiently while maintaining high availability.
                  </p>
                  
                  <div style={styles.skillsGrid}>
                    {skills.map((skill, index) => (
                      <div key={index} style={styles.skillItem}>
                        <div style={styles.skillHeader}>
                          <div style={styles.skillName}>
                            <span style={{ color: skill.color, marginRight: '10px' }}>
                              {skill.icon}
                            </span>
                            {skill.name}
                          </div>
                          <span style={styles.skillPercent}>{skill.level}%</span>
                        </div>
                        <div style={styles.skillBar}>
                          <div 
                            style={{
                              ...styles.skillProgress,
                              width: `${skill.level}%`,
                              backgroundColor: skill.color,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Additional Skills */}
                  <div style={styles.additionalSkills}>
                    <h4 style={styles.additionalTitle}>Additional Tools & Technologies</h4>
                    <div style={styles.toolsGrid}>
                      {['Prometheus', 'Grafana', 'ELK Stack', 'Helm', 'Istio', 'Vault', 
                        'CloudFormation', 'GitLab CI', 'CircleCI', 'Datadog', 'New Relic', 
                        'Splunk'].map((tool, index) => (
                        <span key={index} style={styles.toolTag}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Certifications Tab */}
              {activeTab === 'certifications' && (
                <div style={styles.certificationsContent}>
                  <h3 style={styles.contentTitle}>Professional Certifications</h3>
                  <p style={styles.introText}>
                    Continuously updating my skills with industry-recognized certifications 
                    to stay current with evolving cloud technologies and best practices.
                  </p>
                  
                  <div style={styles.certificationsGrid}>
                    {certifications.map((cert, index) => (
                      <div key={index} style={styles.certificationCard}>
                        <div style={styles.certificationIcon}>
                          <FiAward />
                        </div>
                        <div style={styles.certificationInfo}>
                          <h4 style={styles.certificationName}>{cert.name}</h4>
                          <div style={styles.certificationDetails}>
                            <span style={styles.certificationIssuer}>{cert.issuer}</span>
                            <span style={styles.certificationYear}>{cert.year}</span>
                          </div>
                        </div>
                        <div style={styles.certificationBadge}>
                          <FiShield />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Philosophy */}
                  <div style={styles.philosophyCard}>
                    <h4 style={styles.philosophyTitle}>My DevOps Philosophy</h4>
                    <div style={styles.philosophyContent}>
                      <div style={styles.philosophyItem}>
                        <FiGitMerge style={styles.philosophyIcon} />
                        <div>
                          <div style={styles.philosophyItemTitle}>Infrastructure as Code</div>
                          <div style={styles.philosophyItemText}>
                            Treat infrastructure as software with version control and automation
                          </div>
                        </div>
                      </div>
                      <div style={styles.philosophyItem}>
                        <FiDatabase style={styles.philosophyIcon} />
                        <div>
                          <div style={styles.philosophyItemTitle}>Reliability First</div>
                          <div style={styles.philosophyItemText}>
                            Build systems with redundancy, monitoring, and automatic recovery
                          </div>
                        </div>
                      </div>
                      <div style={styles.philosophyItem}>
                        <FiTerminal style={styles.philosophyIcon} />
                        <div>
                          <div style={styles.philosophyItemTitle}>Continuous Improvement</div>
                          <div style={styles.philosophyItemText}>
                            Iterate on processes, automate everything possible, and optimize costs
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  about: {
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
    zIndex: 0,
  },
  floatingElement: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(100, 255, 218, 0.05) 0%, transparent 70%)',
    top: '10%',
    right: '5%',
    animation: 'float 20s infinite ease-in-out',
  },
  floatingElement2: {
    position: 'absolute',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(74, 108, 247, 0.05) 0%, transparent 70%)',
    bottom: '10%',
    left: '5%',
    animation: 'float 15s infinite ease-in-out reverse',
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
    marginBottom: '10px',
    lineHeight: '1.2',
  },
  sectionSubtitle: {
    display: 'block',
    fontSize: '18px',
    color: '#8892b0',
    fontWeight: '400',
    marginTop: '10px',
  },
  contentWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '40px',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  profileCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    padding: '30px',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
  },
  profileImage: {
    marginBottom: '20px',
  },
  imagePlaceholder: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid rgba(100, 255, 218, 0.3)',
  },
  profileIcon: {
    fontSize: '50px',
    color: '#64ffda',
  },
  profileName: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#e6f1ff',
    marginBottom: '5px',
  },
  profileTitle: {
    fontSize: '16px',
    color: '#64ffda',
    marginBottom: '20px',
  },
  profileStats: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  statIcon: {
    color: '#64ffda',
    fontSize: '20px',
  },
  statNumber: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#e6f1ff',
  },
  statLabel: {
    fontSize: '12px',
    color: '#8892b0',
  },
  infoCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    padding: '25px',
    backdropFilter: 'blur(10px)',
  },
  infoTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#e6f1ff',
    marginBottom: '20px',
  },
  infoItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  infoIcon: {
    color: '#64ffda',
    fontSize: '18px',
    minWidth: '24px',
  },
  infoLabel: {
    fontSize: '12px',
    color: '#8892b0',
    marginBottom: '4px',
  },
  infoValue: {
    fontSize: '14px',
    color: '#ccd6f6',
    fontWeight: '500',
  },
  metricsCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    padding: '25px',
    backdropFilter: 'blur(10px)',
  },
  metricsTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#e6f1ff',
    marginBottom: '20px',
  },
  metricsGrid: {
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
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#64ffda',
    fontSize: '18px',
  },
  metricValue: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#e6f1ff',
    marginBottom: '2px',
  },
  metricLabel: {
    fontSize: '12px',
    color: '#8892b0',
  },
  rightColumn: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    padding: '30px',
    backdropFilter: 'blur(10px)',
  },
  tabsNavigation: {
    display: 'flex',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    marginBottom: '30px',
  },
  tabButton: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '15px',
    background: 'none',
    border: 'none',
    color: '#8892b0',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
  },
  tabsContent: {
    minHeight: '400px',
  },
  contentTitle: {
    fontSize: '28px',
    fontWeight: '600',
    color: '#e6f1ff',
    marginBottom: '15px',
  },
  introText: {
    fontSize: '16px',
    color: '#8892b0',
    lineHeight: '1.8',
    marginBottom: '30px',
  },
  timeline: {
    position: 'relative',
    paddingLeft: '20px',
  },
  timelineItem: {
    display: 'flex',
    marginBottom: '30px',
    position: 'relative',
  },
  timelineMarker: {
    position: 'relative',
    marginRight: '20px',
    minWidth: '20px',
  },
  markerDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#64ffda',
    position: 'relative',
    zIndex: 2,
  },
  timelineLine: {
    position: 'absolute',
    top: '12px',
    left: '5px',
    width: '2px',
    height: 'calc(100% + 30px)',
    backgroundColor: 'rgba(100, 255, 218, 0.3)',
    zIndex: 1,
  },
  timelineContent: {
    flex: 1,
  },
  timelineHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '10px',
  },
  companyName: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#e6f1ff',
    margin: 0,
  },
  period: {
    fontSize: '14px',
    color: '#64ffda',
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    padding: '4px 12px',
    borderRadius: '12px',
  },
  role: {
    fontSize: '16px',
    color: '#8892b0',
    marginBottom: '15px',
  },
  achievementsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  achievement: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    marginBottom: '10px',
    color: '#ccd6f6',
    fontSize: '14px',
    lineHeight: '1.6',
  },
  achievementDot: {
    minWidth: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#64ffda',
    marginTop: '8px',
  },
  skillsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '40px',
  },
  skillItem: {
    marginBottom: '15px',
  },
  skillHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  skillName: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: '500',
    color: '#ccd6f6',
  },
  skillPercent: {
    fontSize: '14px',
    color: '#8892b0',
  },
  skillBar: {
    height: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  skillProgress: {
    height: '100%',
    borderRadius: '4px',
    transition: 'width 1s ease-in-out',
  },
  additionalSkills: {
    marginTop: '40px',
  },
  additionalTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#e6f1ff',
    marginBottom: '20px',
  },
  toolsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  toolTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#8892b0',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  certificationsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '40px',
  },
  certificationCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    padding: '20px',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease',
  },
  certificationIcon: {
    color: '#64ffda',
    fontSize: '24px',
  },
  certificationInfo: {
    flex: 1,
  },
  certificationName: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#e6f1ff',
    marginBottom: '5px',
  },
  certificationDetails: {
    display: 'flex',
    gap: '20px',
  },
  certificationIssuer: {
    fontSize: '14px',
    color: '#8892b0',
  },
  certificationYear: {
    fontSize: '14px',
    color: '#64ffda',
  },
  certificationBadge: {
    color: 'rgba(100, 255, 218, 0.3)',
    fontSize: '20px',
  },
  philosophyCard: {
    backgroundColor: 'rgba(100, 255, 218, 0.05)',
    border: '1px solid rgba(100, 255, 218, 0.1)',
    borderRadius: '15px',
    padding: '25px',
  },
  philosophyTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#64ffda',
    marginBottom: '20px',
  },
  philosophyContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  philosophyItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '15px',
  },
  philosophyIcon: {
    color: '#64ffda',
    fontSize: '20px',
    minWidth: '24px',
    marginTop: '2px',
  },
  philosophyItemTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#e6f1ff',
    marginBottom: '5px',
  },
  philosophyItemText: {
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

// Hover effects
styleSheet.insertRule(`
  .tab-button:hover {
    color: #64ffda !important;
    background-color: rgba(100, 255, 218, 0.05) !important;
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  .certification-card:hover {
    transform: translateY(-5px);
    border-color: rgba(100, 255, 218, 0.2) !important;
    box-shadow: 0 10px 30px -10px rgba(100, 255, 218, 0.1);
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  .tool-tag:hover {
    background-color: rgba(100, 255, 218, 0.1) !important;
    color: #64ffda !important;
    border-color: rgba(100, 255, 218, 0.3) !important;
    transform: translateY(-2px);
  }
`, styleSheet.cssRules.length);

export default About;