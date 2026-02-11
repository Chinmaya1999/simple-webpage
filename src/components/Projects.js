import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A responsive admin dashboard for e-commerce analytics',
      technologies: ['React', 'Chart.js', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 2,
      title: 'Travel Blog Platform',
      description: 'Full-stack blog platform for travel enthusiasts',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 3,
      title: 'Fitness Tracker App',
      description: 'Mobile-first fitness tracking application',
      technologies: ['React Native', 'Firebase', 'Redux'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with animations',
      technologies: ['React', 'Framer Motion', 'Styled Components'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  return (
    <section id="projects" style={styles.projects}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>My Projects</h2>
        <div style={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} style={styles.projectCard}>
              <div style={styles.projectHeader}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <div style={styles.techStack}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} style={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <p style={styles.projectDescription}>{project.description}</p>
              <div style={styles.projectLinks}>
                <a 
                  href={project.github} 
                  style={styles.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a 
                  href={project.live} 
                  style={{...styles.projectLink, ...styles.liveLink}}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  projects: {
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
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
  },
  projectCard: {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '25px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
  },
  projectHeader: {
    marginBottom: '15px',
  },
  projectTitle: {
    fontSize: '22px',
    color: '#333',
    marginBottom: '10px',
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  techTag: {
    backgroundColor: '#e9ecef',
    color: '#666',
    padding: '4px 10px',
    borderRadius: '15px',
    fontSize: '12px',
    fontWeight: '500',
  },
  projectDescription: {
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  projectLinks: {
    display: 'flex',
    gap: '15px',
  },
  projectLink: {
    textDecoration: 'none',
    color: '#4a6cf7',
    fontWeight: '500',
    fontSize: '14px',
    padding: '8px 15px',
    border: '1px solid #4a6cf7',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
  },
  liveLink: {
    backgroundColor: '#4a6cf7',
    color: 'white',
  },
};

export default Projects;
