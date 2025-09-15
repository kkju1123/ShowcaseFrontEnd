import React, { useState } from 'react';
import tmImage from "../assets/tm.png";
import nrImage from "../assets/nr.png";
import myImage from "../assets/my.png";
const Work = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Message Board Application",
      description: "A full-stack message board application with separated frontend and backend architecture. Implemented user authentication, real-time updates, and a responsive design.",
      technologies: ["React", "Spring Boot", "RESTful APIs", "MySQL", "JWT Authentication"],
      features: ["User authentication", "CRUD operations", "Real-time updates", "Responsive design"],
      image: myImage,
      category: "personal",
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Trip.com Content Community - Note Details",
      description: "Developed and optimized the note details page for Trip.com's content community platform. Enhanced user experience with intuitive design and smooth interactions.",
      technologies: ["React", "CSS3", "Component Library", "Performance Optimization"],
      features: ["Content display", "User interaction", "Image gallery", "Comment system"],
      image: tmImage,
      category: "work",
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Trip Domestic Content Community - i18n Internationalization",
      description: "Implemented internationalization and localization for Trip's domestic content community. Supported multiple languages and regional preferences.",
      technologies: ["React", "i18next", "Internationalization", "Localization"],
      features: ["Multi-language support", "Dynamic content loading", "Locale management", "RTL support"],
      image: nrImage,
      category: "work",
      link: "#",
      github: "#"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div style={styles.projectsShowcase}>
      <div style={styles.container}>
        <header style={styles.showcaseHeader}>
          <div style={styles.title}>Project Portfolio</div>
          <p style={styles.subtitle}>A collection of my recent work and personal projects</p>
        </header>

        <div style={styles.filterButtons}>
          <button 
            style={activeFilter === 'all' ? {...styles.filterButton, ...styles.activeFilter} : styles.filterButton}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button 
            style={activeFilter === 'personal' ? {...styles.filterButton, ...styles.activeFilter} : styles.filterButton}
            onClick={() => setActiveFilter('personal')}
          >
            Personal Projects
          </button>
          <button 
            style={activeFilter === 'work' ? {...styles.filterButton, ...styles.activeFilter} : styles.filterButton}
            onClick={() => setActiveFilter('work')}
          >
            Work Projects
          </button>
        </div>

        <div style={styles.projectsGrid}>
          {filteredProjects.map(project => (
            <div key={project.id} style={styles.projectCard}>
              <div style={styles.imageContainer}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={styles.projectImage}
                />
                
              </div>
              
              <div style={styles.projectContent}>
                <div style={styles.projectTitle}>{project.title}</div>
                <p style={styles.projectDescription}>{project.description}</p>
                
                <div style={styles.techStack}>
                <div style={styles.sectionTitle}>Technology used</div>
                  <div style={styles.techTags}>
                    {project.technologies.map((tech, index) => (
                      <span key={index} style={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div style={styles.features}>
                  <div style={styles.sectionTitle}>Key Features</div>
                  <ul style={styles.featuresList}>
                    {project.features.map((feature, index) => (
                      <li key={index} style={styles.featureItem}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  projectsShowcase: {
    minHeight: '100vh',
    
  background: '#fff',
    color: '#639',
    padding: '20px',
    fontFamily: "'Arial', Tahoma, Geneva, Verdana, sans-serif"
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  showcaseHeader: {
    textAlign: 'center',
    padding: '60px 20px',
    marginBottom: '40px'
  },
  title: {
    fontSize: '3.2rem',
    marginBottom: '20px',
    fontWeight: '700',
    color: '#639',
  },
  subtitle: {
    fontSize: '1.4rem',
    opacity: '0.9',
    maxWidth: '800px',
    margin: '0 auto',
  },
  filterButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '40px',
    flexWrap: 'wrap'
  },
  filterButton: {
    padding: '12px 24px',
    borderRadius: '30px',
    border: 'none',
    background: 'rgba(230, 230, 250, 0.5)',
    color: '#639',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '1rem',
    fontWeight: '500'
  },
  activeFilter: {
    background: 'rgba(230, 230, 250, 0.5)',
    color: '#639',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '30px'
  },
  projectCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  },
  imageContainer: {
    position: 'relative',
    height: '200px',
    overflow: 'hidden'
  },
  projectImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  },
  categoryBadge: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    padding: '5px 15px',
    borderRadius: '20px',
    background: 'rgba(230, 230, 250, 0.5)',
    color: '#639',
    fontSize: '0.8rem',
    fontWeight: '500'
  },
  projectContent: {
    padding: '25px'
  },
  projectTitle: {
    fontSize: '1.5rem',
    marginBottom: '15px',
    color: '#639',
    fontWeight: '600'
  },
  projectDescription: {
    color: '#999',
    marginBottom: '20px',
    lineHeight: '1.6'
  },
  techStack: {
    marginBottom: '20px'
  },
  sectionTitle: {
    fontSize: '1.1rem',
    marginBottom: '10px',
    color: '#639',
    fontWeight: '500'
  },
  techTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px'
  },
  techTag: {
    padding: '5px 12px',
    borderRadius: '15px',
    background: 'rgba(230, 230, 250, 0.5)',
    color: '#639',
    fontSize: '0.85rem'
  },
  features: {
  },
  featuresList: {
    paddingLeft: '20px'
  },
  featureItem: {
    marginBottom: '8px',
    color: '#999'
  },
  projectLinks: {
    display: 'flex',
    gap: '15px'
  },
  demoLink: {
    padding: '10px 20px',
    borderRadius: '5px',
    background: 'rgba(230, 230, 250, 0.5)',
    color: '#639',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    display: 'inline-block'
  },
  githubLink: {
    padding: '10px 20px',
    borderRadius: '5px',
    background: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  },
  icon: {
    fontSize: '1.1rem'
  }
};

// Add hover effects
Object.assign(styles.filterButton, {
  ':hover': {
    background: 'rgba(230, 230, 250, 0.5)'
  }
});

Object.assign(styles.projectCard, {
  ':hover': {
    transform: 'translateY(-5px)'
  }
});

Object.assign(styles.demoLink, {
  ':hover': {
    background: 'rgba(230, 230, 250, 0.5)',
    transform: 'translateY(-2px)'
  }
});

Object.assign(styles.githubLink, {
  ':hover': {
    background: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateY(-2px)'
  }
});

export default Work;