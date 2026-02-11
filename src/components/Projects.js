import React, { useState } from 'react';
import { 
  FiGithub, 
  FiExternalLink, 
  FiServer, 
  FiCloud, 
  FiCpu,
  FiDatabase,
  FiLock,
  FiGitPullRequest,
  FiPlayCircle,
  FiFolder,
  FiStar,
  FiCheck,
  FiBox,
  FiLayers,
  FiCode
} from 'react-icons/fi';
import { 
  FaAws, 
  FaDocker, 
  FaPython,
  FaJenkins,
  FaGitAlt,
  FaTerminal,
  FaRegCheckCircle
} from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'automation', label: 'Automation' },
    { id: 'cicd', label: 'CI/CD' },
    { id: 'monitoring', label: 'Monitoring' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Multi-Cloud Kubernetes Platform',
      description: 'Enterprise-grade Kubernetes platform deployed across AWS and GCP with automated scaling, monitoring, and security policies.',
      longDescription: 'Designed and implemented a hybrid cloud Kubernetes platform serving 500+ microservices. Implemented GitOps workflow with ArgoCD, custom HPA controllers, and cross-cloud networking.',
      technologies: [
        { name: 'Kubernetes', icon: <FiBox />, color: '#326CE5' },
        { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
        { name: 'Terraform', icon: <FiLayers />, color: '#7B42BC' },
        { name: 'ArgoCD', icon: <FiGitPullRequest />, color: '#EF5B5B' },
      ],
      category: 'infrastructure',
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      metrics: {
        costReduction: '40%',
        deploymentSpeed: '85%',
        uptime: '99.99%'
      },
      status: 'active',
      featured: true
    },
    {
      id: 2,
      title: 'Infrastructure as Code Pipeline',
      description: 'Automated infrastructure deployment pipeline using Terraform and Jenkins with drift detection and compliance scanning.',
      longDescription: 'Built CI/CD pipeline for infrastructure deployment with automated testing, security scanning, and compliance validation. Implemented drift detection and auto-remediation.',
      technologies: [
        { name: 'Terraform', icon: <FiLayers />, color: '#7B42BC' },
        { name: 'Jenkins', icon: <FaJenkins />, color: '#D24939' },
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
      ],
      category: 'automation',
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      metrics: {
        costReduction: '35%',
        deploymentSpeed: '90%',
        incidents: '60%'
      },
      status: 'completed',
      featured: true
    },
    {
      id: 3,
      title: 'Container Security Scanner',
      description: 'Automated container security scanning pipeline integrated into CI/CD with vulnerability detection and compliance reporting.',
      longDescription: 'Developed security scanning pipeline for Docker containers with automated vulnerability assessment, SBOM generation, and compliance reporting. Integrated with Jenkins and GitLab CI.',
      technologies: [
        { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'Ansible', icon: <FiCode />, color: '#EE0000' },
        { name: 'Security', icon: <FiLock />, color: '#64ffda' },
      ],
      category: 'cicd',
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      metrics: {
        vulnerabilities: '95%',
        scanTime: '2min',
        compliance: '100%'
      },
      status: 'active'
    },
    {
      id: 4,
      title: 'Multi-Region Database Replication',
      description: 'Real-time database replication across multiple AWS regions with automated failover and data consistency validation.',
      longDescription: 'Implemented cross-region database replication for PostgreSQL with automated failover, monitoring, and data consistency checks. Built custom replication monitoring dashboard.',
      technologies: [
        { name: 'PostgreSQL', icon: <FiDatabase />, color: '#336791' },
        { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'Monitoring', icon: <FiCpu />, color: '#E6522C' },
      ],
      category: 'infrastructure',
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      metrics: {
        rto: '2min',
        rpo: '0sec',
        latency: '<100ms'
      },
      status: 'completed'
    },
    {
      id: 5,
      title: 'GitOps Workflow Automation',
      description: 'GitOps implementation with ArgoCD for declarative infrastructure and application deployment across multiple clusters.',
      longDescription: 'Designed and implemented GitOps workflow using ArgoCD for managing Kubernetes manifests across development, staging, and production environments.',
      technologies: [
        { name: 'ArgoCD', icon: <FiGitPullRequest />, color: '#EF5B5B' },
        { name: 'Kubernetes', icon: <FiBox />, color: '#326CE5' },
        { name: 'Git', icon: <FaGitAlt />, color: '#F1502F' },
        { name: 'Helm', icon: <FiFolder />, color: '#0F1689' },
      ],
      category: 'cicd',
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      metrics: {
        deployments: '50/day',
        rollbackTime: '1min',
        errorRate: '0.1%'
      },
      status: 'active'
    },
    {
      id: 6,
      title: 'Cloud Cost Optimization Dashboard',
      description: 'Real-time cloud cost monitoring and optimization dashboard with automated resource scaling and waste detection.',
      longDescription: 'Built cost optimization platform with automated resource right-sizing, idle resource detection, and budget forecasting. Integrated with AWS Cost Explorer and CloudHealth.',
      technologies: [
        { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'React', icon: <FiCode />, color: '#61DAFB' },
        { name: 'Grafana', icon: <FiServer />, color: '#F46800' },
      ],
      category: 'monitoring',
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      metrics: {
        savings: '$50k/mo',
        optimization: '40%',
        alerts: '200/day'
      },
      status: 'active',
      featured: true
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  return (
    <section id="projects" style={styles.projects}>
      {/* Background Elements */}
      <div style={styles.backgroundElements}>
        <div style={styles.floatingCircle1}></div>
        <div style={styles.floatingCircle2}></div>
      </div>

      <div style={styles.container}>
        {/* Section Header */}
        <div style={styles.sectionHeader}>
          <div style={styles.sectionBadge}>
            <FiFolder style={{ marginRight: '8px' }} />
            PROJECT PORTFOLIO
          </div>
          <h2 style={styles.sectionTitle}>
            Infrastructure & Automation
            <span style={styles.sectionSubtitle}>Projects</span>
          </h2>
          <p style={styles.sectionDescription}>
            Real-world DevOps projects showcasing cloud infrastructure, automation pipelines, 
            and scalable solutions that improve efficiency and reliability.
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={styles.filterContainer}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              style={{
                ...styles.filterButton,
                backgroundColor: activeFilter === filter.id ? 'rgba(100, 255, 218, 0.1)' : 'transparent',
                borderColor: activeFilter === filter.id ? '#64ffda' : 'rgba(255, 255, 255, 0.1)',
                color: activeFilter === filter.id ? '#64ffda' : '#8892b0',
              }}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
              <span style={styles.projectCount}>
                {filter.id === 'all' 
                  ? projects.length 
                  : projects.filter(p => p.category === filter.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              style={{
                ...styles.projectCard,
                transform: hoveredProject === project.id ? 'translateY(-10px)' : 'none',
                borderColor: project.featured ? 'rgba(100, 255, 218, 0.3)' : 'rgba(255, 255, 255, 0.05)',
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Card Header */}
              <div style={styles.cardHeader}>
                <div style={styles.projectStatus}>
                  <span style={{
                    ...styles.statusDot,
                    backgroundColor: project.status === 'active' ? '#64ffda' : '#8892b0'
                  }}></span>
                  {project.status === 'active' ? 'Active' : 'Completed'}
                </div>
                {project.featured && (
                  <div style={styles.featuredBadge}>
                    <FiStar style={{ marginRight: '4px' }} />
                    Featured
                  </div>
                )}
              </div>

              {/* Project Title & Description */}
              <h3 style={styles.projectTitle}>
                <span style={styles.projectIcon}>
                  {project.category === 'infrastructure' ? <FiServer /> :
                   project.category === 'automation' ? <FiCpu /> :
                   project.category === 'cicd' ? <FiGitPullRequest /> :
                   <FiCloud />}
                </span>
                {project.title}
              </h3>
              <p style={styles.projectDescription}>{project.description}</p>

              {/* Technology Stack */}
              <div style={styles.techStack}>
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    style={{
                      ...styles.techItem,
                      backgroundColor: `${tech.color}15`,
                      borderColor: tech.color,
                    }}
                    title={tech.name}
                  >
                    <span style={{ color: tech.color, fontSize: '16px' }}>
                      {tech.icon}
                    </span>
                    <span style={styles.techName}>{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div style={styles.metricsContainer}>
                {Object.entries(project.metrics).map(([key, value], index) => (
                  <div key={index} style={styles.metricItem}>
                    <div style={styles.metricValue}>{value}</div>
                    <div style={styles.metricLabel}>
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={styles.actionButtons}>
                <a
                  href={project.github}
                  style={styles.githubButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub />
                  Code
                </a>
                <a
                  href={project.demo}
                  style={styles.demoButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink />
                  Live Demo
                </a>
                <button
                  style={styles.detailsButton}
                  onClick={() => console.log('View details:', project.id)}
                >
                  <FiPlayCircle />
                  Details
                </button>
              </div>

              {/* Hover Overlay */}
              {hoveredProject === project.id && (
                <div style={styles.projectOverlay}>
                  <div style={styles.overlayContent}>
                    <h4 style={styles.overlayTitle}>Project Details</h4>
                    <p style={styles.overlayDescription}>{project.longDescription}</p>
                    <div style={styles.overlayStats}>
                      <div style={styles.stat}>
                        <FiCpu />
                        <span>Complexity: High</span>
                      </div>
                      <div style={styles.stat}>
                        <FiServer />
                        <span>Infrastructure</span>
                      </div>
                      <div style={styles.stat}>
                        <FiDatabase />
                        <span>Production Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div style={styles.viewAllContainer}>
          <button style={styles.viewAllButton}>
            View All Projects
            <FiExternalLink style={{ marginLeft: '10px' }} />
          </button>
          <p style={styles.projectCountText}>
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  projects: {
    backgroundColor: '#0a192f',
    padding: '120px 20px',
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  floatingCircle1: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(74, 108, 247, 0.05) 0%, transparent 70%)',
    top: '10%',
    right: '-100px',
    animation: 'float 25s infinite ease-in-out',
  },
  floatingCircle2: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(100, 255, 218, 0.05) 0%, transparent 70%)',
    bottom: '10%',
    left: '-50px',
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
    color: '#64ffda',
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
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '15px',
    marginBottom: '60px',
  },
  filterButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    borderRadius: '30px',
    border: '1px solid',
    background: 'none',
    color: '#8892b0',
    fontSize: '15px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  projectCount: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#ccd6f6',
    fontSize: '12px',
    padding: '2px 8px',
    borderRadius: '10px',
    minWidth: '24px',
    textAlign: 'center',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '30px',
    marginBottom: '60px',
  },
  projectCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    padding: '30px',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)',
    backdropFilter: 'blur(10px)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  projectStatus: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    color: '#8892b0',
  },
  statusDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
  },
  featuredBadge: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    color: '#FFC107',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '500',
  },
  projectTitle: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#e6f1ff',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  projectIcon: {
    color: '#64ffda',
    fontSize: '20px',
  },
  projectDescription: {
    fontSize: '15px',
    color: '#8892b0',
    lineHeight: '1.7',
    marginBottom: '25px',
    minHeight: '60px',
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '25px',
  },
  techItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '8px',
    border: '1px solid',
    fontSize: '13px',
    backdropFilter: 'blur(10px)',
  },
  techName: {
    color: '#ccd6f6',
    fontWeight: '500',
  },
  metricsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    padding: '15px',
    borderRadius: '10px',
    marginBottom: '25px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  metricItem: {
    textAlign: 'center',
    flex: 1,
  },
  metricValue: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#64ffda',
    marginBottom: '4px',
  },
  metricLabel: {
    fontSize: '11px',
    color: '#8892b0',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  actionButtons: {
    display: 'flex',
    gap: '10px',
  },
  githubButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#ccd6f6',
    padding: '12px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  demoButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    flex: 1,
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    color: '#64ffda',
    padding: '12px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(100, 255, 218, 0.2)',
  },
  detailsButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    flex: 1,
    backgroundColor: 'transparent',
    color: '#8892b0',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  projectOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(10, 25, 47, 0.95)',
    backdropFilter: 'blur(5px)',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    opacity: 0,
    animation: 'fadeIn 0.3s ease forwards',
  },
  overlayContent: {
    textAlign: 'center',
  },
  overlayTitle: {
    color: '#64ffda',
    fontSize: '20px',
    marginBottom: '15px',
  },
  overlayDescription: {
    color: '#8892b0',
    fontSize: '14px',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  overlayStats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  stat: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: '#ccd6f6',
    fontSize: '13px',
  },
  viewAllContainer: {
    textAlign: 'center',
    marginTop: '40px',
  },
  viewAllButton: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: '#64ffda',
    border: '1px solid #64ffda',
    padding: '15px 40px',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginBottom: '20px',
  },
  projectCountText: {
    color: '#8892b0',
    fontSize: '14px',
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
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`, styleSheet.cssRules.length);

// Hover effects
styleSheet.insertRule(`
  .project-card:hover {
    border-color: rgba(100, 255, 218, 0.3) !important;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  .filter-button:hover {
    background-color: rgba(100, 255, 218, 0.05) !important;
    border-color: rgba(100, 255, 218, 0.3) !important;
    color: #64ffda !important;
    transform: translateY(-2px);
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  .github-button:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
    border-color: rgba(255, 255, 255, 0.3) !important;
    transform: translateY(-2px);
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  .demo-button:hover {
    background-color: rgba(100, 255, 218, 0.2) !important;
    border-color: #64ffda !important;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px -10px rgba(100, 255, 218, 0.3);
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  .details-button:hover {
    background-color: rgba(255, 255, 255, 0.05) !important;
    color: #ccd6f6 !important;
    transform: translateY(-2px);
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  .view-all-button:hover {
    background-color: rgba(100, 255, 218, 0.1) !important;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px -10px rgba(100, 255, 218, 0.3);
  }
`, styleSheet.cssRules.length);

export default Projects;