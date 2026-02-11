import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'HTML/CSS', level: 98 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Git', level: 90 },
    { name: 'Responsive Design', level: 95 },
  ];

  return (
    <section id="skills" style={styles.skills}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Skills & Expertise</h2>
        <div style={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} style={styles.skillItem}>
              <div style={styles.skillHeader}>
                <span style={styles.skillName}>{skill.name}</span>
                <span style={styles.skillPercent}>{skill.level}%</span>
              </div>
              <div style={styles.skillBar}>
                <div 
                  style={{
                    ...styles.skillProgress,
                    width: `${skill.level}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  skills: {
    padding: '80px 20px',
    backgroundColor: 'white',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '36px',
    color: '#333',
    textAlign: 'center',
    marginBottom: '50px',
  },
  skillsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
  },
  skillItem: {
    marginBottom: '10px',
  },
  skillHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
  },
  skillName: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#333',
  },
  skillPercent: {
    fontSize: '14px',
    color: '#666',
  },
  skillBar: {
    height: '10px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  skillProgress: {
    height: '100%',
    backgroundColor: '#4a6cf7',
    borderRadius: '5px',
    transition: 'width 1s ease-in-out',
  },
};

export default Skills;