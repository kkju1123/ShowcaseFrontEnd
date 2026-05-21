import React, { useState } from 'react';
import tmImage from "../assets/tm.png";
import nrImage from "../assets/nr.png";
import myImage from "../assets/my.png";

const content = {
  en: {
    title: "Project Portfolio",
    subtitle: "A collection of my recent work and personal projects",
    filters: {
      all: "All Projects",
      personal: "Personal Projects",
      work: "Work Projects",
    },
    technologyUsed: "Technology used",
    keyFeatures: "Key Features",
    projects: [
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
    ],
  },
  zh: {
    title: "项目作品集",
    subtitle: "近期工作项目与个人项目合集",
    filters: {
      all: "全部项目",
      personal: "个人项目",
      work: "工作项目",
    },
    technologyUsed: "使用技术",
    keyFeatures: "核心功能",
    projects: [
      {
        id: 1,
        title: "留言板应用",
        description: "一个前后端分离的全栈留言板应用，实现用户认证、实时更新和响应式设计。",
        technologies: ["React", "Spring Boot", "RESTful API", "MySQL", "JWT 认证"],
        features: ["用户认证", "增删改查", "实时更新", "响应式设计"],
        image: myImage,
        category: "personal",
        link: "#",
        github: "#"
      },
      {
        id: 2,
        title: "Trip.com 内容社区 - 笔记详情页",
        description: "开发并优化 Trip.com 内容社区平台的笔记详情页，通过清晰的设计和顺畅的交互提升用户体验。",
        technologies: ["React", "CSS3", "组件库", "性能优化"],
        features: ["内容展示", "用户交互", "图片画廊", "评论系统"],
        image: tmImage,
        category: "work",
        link: "#",
        github: "#"
      },
      {
        id: 3,
        title: "Trip 国内内容社区 - i18n 国际化",
        description: "为 Trip 国内内容社区实现国际化与本地化能力，支持多语言内容和区域偏好。",
        technologies: ["React", "i18next", "国际化", "本地化"],
        features: ["多语言支持", "动态内容加载", "区域管理", "RTL 支持"],
        image: nrImage,
        category: "work",
        link: "#",
        github: "#"
      }
    ],
  },
};

const Work = ({ language = "en" }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const t = content[language] || content.en;
  const projects = t.projects;

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div style={styles.projectsShowcase}>
      <div style={styles.container}>
        <header style={styles.showcaseHeader}>
          <div style={styles.title}>{t.title}</div>
          <p style={styles.subtitle}>{t.subtitle}</p>
        </header>

        <div style={styles.filterButtons}>
          <button 
            style={activeFilter === 'all' ? {...styles.filterButton, ...styles.activeFilter} : styles.filterButton}
            onClick={() => setActiveFilter('all')}
          >
            {t.filters.all}
          </button>
          <button 
            style={activeFilter === 'personal' ? {...styles.filterButton, ...styles.activeFilter} : styles.filterButton}
            onClick={() => setActiveFilter('personal')}
          >
            {t.filters.personal}
          </button>
          <button 
            style={activeFilter === 'work' ? {...styles.filterButton, ...styles.activeFilter} : styles.filterButton}
            onClick={() => setActiveFilter('work')}
          >
            {t.filters.work}
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
                <div style={styles.sectionTitle}>{t.technologyUsed}</div>
                  <div style={styles.techTags}>
                    {project.technologies.map((tech, index) => (
                      <span key={index} style={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div style={styles.features}>
                  <div style={styles.sectionTitle}>{t.keyFeatures}</div>
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
    fontSize: 'clamp(1.8rem, 5vw, 3.2rem)',
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
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
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
