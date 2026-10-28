import React, { useEffect, useRef, useState } from 'react';
import "../style/work.css";
import tmImage from "../assets/tm.png";
import nrImage from "../assets/nr.png";
import myImage from "../assets/my.png";
import ragImage from "../assets/rag.png";

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
    introduction: "Introduction",
    viewDetails: "View details",
    backToList: "Back to projects",
    implementation: "Implementation",
    projects: [
      {
        id: 5,
        title: "TrainWatch: An Intelligent Ops Agent for Long-Running Model Training",
        description: "While training models during my internship, a full run took several days and couldn't be watched by hand around the clock; if training crashed or diverged halfway, carrying on wasted time and compute. So I built a monitoring agent that detects anomalies in real time, diagnoses root causes on its own, and resumes after human approval, keeping long training runs on track while unattended.",
        implementation: [
          {
            lead: "Incident-handling agent (layered Workflow + Agent design)",
            text: "Built the incident-handling state machine with LangGraph. Deterministic rules handle anomaly detection and severity grading; a diagnosis agent investigates root causes through log / metric tools and CodeAct, and a Critic reviews the evidence chain. High-risk actions go through Human-in-the-loop approval via interrupt() plus Feishu cards, with state persisted by a SQLite checkpointer.",
          },
          {
            lead: "Agentic RAG and evaluation",
            text: "Built a knowledge base from the official PyTorch docs and GitHub issues, using bge-m3 hybrid dense + sparse retrieval, RRF fusion, and reranking, with the agent deciding on its own when to retrieve. Built Failure Gym, a fault-injection evaluation set covering OOM, NaN, hangs, and process crashes, and validated each module through ablation experiments.",
          },
        ],
        technologies: ["Python", "FastAPI", "LangGraph", "Qdrant", "Neo4j", "Redis", "PostgreSQL", "Docker Compose", "Hetzner Cloud", "JWT", "SSE"],
        image: null,
        category: "personal",
        link: "#"
      },
      {
        id: 1,
        title: "Production-Ready RAG Pipeline Adaptation",
        description: "Based on the production-grade architecture concepts of the open-source scalable-rag-pipeline project, I studied its design principles in depth and engineered a lighter adaptation of the original AWS EKS, Ray distributed cluster, and vLLM self-hosted inference stack, independently completing the full practice from local development to cloud deployment.",
        technologies: ["RAG", "LLM", "Docker", "Cloud Deployment", "System Architecture"],
        features: ["Architecture analysis", "Infrastructure adaptation", "Local development", "Cloud deployment"],
        image: ragImage,
        category: "personal",
        link: "#"
      },
      {
        id: 2,
        title: "Message Board Application",
        description: "A full-stack message board application with separated frontend and backend architecture. Implemented user authentication, real-time updates, and a responsive design.",
        technologies: ["React", "Spring Boot", "RESTful APIs", "MySQL", "JWT Authentication"],
        features: ["User authentication", "CRUD operations", "Real-time updates", "Responsive design"],
        image: myImage,
        category: "personal",
        link: "#"
      },
      {
        id: 3,
        title: "Trip.com Content Community - Note Details",
        description: "Developed and optimized the note details page for Trip.com's content community platform. Enhanced user experience with intuitive design and smooth interactions.",
        technologies: ["React", "CSS3", "Component Library", "Performance Optimization"],
        features: ["Content display", "User interaction", "Image gallery", "Comment system"],
        image: tmImage,
        category: "work",
        link: "#"
      },
      {
        id: 4,
        title: "Trip Domestic Content Community - i18n Internationalization",
        description: "Implemented internationalization and localization for Trip's domestic content community. Supported multiple languages and regional preferences.",
        technologies: ["React", "i18next", "Internationalization", "Localization"],
        features: ["Multi-language support", "Dynamic content loading", "Locale management", "RTL support"],
        image: nrImage,
        category: "work",
        link: "#"
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
    introduction: "项目介绍",
    viewDetails: "查看详情",
    backToList: "返回项目列表",
    implementation: "项目实现",
    projects: [
      {
        id: 5,
        title: "TrainWatch：长周期模型训练的智能运维 Agent",
        description: "在实习训练模型时遇到痛点：训练所有 epoch 长达几天，无法完全人工值守，如果训练半路出错或者发散，继续训练将浪费时间和算力资源。所以开发监控 Agent，实现异常实时检测、根因自主诊断、人工审批后恢复，让长周期训练在无人值守时也可以正常进行。",
        implementation: [
          {
            lead: "故障处理 Agent（Workflow + Agent 分层设计）",
            text: "基于 LangGraph 构建故障处理状态机。确定性规则负责异常检测与分级；诊断 Agent 通过日志 / 指标工具和 CodeAct 调查根因，再由 Critic 审查证据链。高风险操作通过 interrupt() 加飞书卡片实现 Human-in-the-loop 审批，用 SQLite checkpointer 持久化状态。",
          },
          {
            lead: "Agentic RAG 与评估体系",
            text: "基于 PyTorch 官方文档和 GitHub issues 构建知识库，采用 bge-m3 稠密加稀疏的混合检索、RRF 融合和 rerank，由 Agent 自主决定何时检索。搭建 Failure Gym 故障注入评估集（覆盖 OOM、NaN、hang、进程崩溃），通过消融实验验证各模块的效果。",
          },
        ],
        technologies: ["Python", "FastAPI", "LangGraph", "Qdrant", "Neo4j", "Redis", "PostgreSQL", "Docker Compose", "Hetzner Cloud", "JWT", "SSE"],
        image: null,
        category: "personal",
        link: "#"
      },
      {
        id: 1,
        title: "生产级 RAG Pipeline 裁剪与云端部署",
        description: "基于开源项目 scalable-rag-pipeline 的生产级架构思想，深入研究其设计原理，将原项目依赖的 AWS EKS、Ray 分布式集群、vLLM 自托管推理等重型基础设施进行工程化裁剪与改造，独立完成从本地开发到云端部署的完整实践。",
        technologies: ["RAG", "LLM", "Docker", "云部署", "系统架构"],
        features: ["架构原理研究", "基础设施裁剪", "本地开发实践", "云端部署"],
        image: ragImage,
        category: "personal",
        link: "#"
      },
      {
        id: 2,
        title: "留言板应用",
        description: "一个前后端分离的全栈留言板应用，实现用户认证、实时更新和响应式设计。",
        technologies: ["React", "Spring Boot", "RESTful API", "MySQL", "JWT 认证"],
        features: ["用户认证", "增删改查", "实时更新", "响应式设计"],
        image: myImage,
        category: "personal",
        link: "#"
      },
      {
        id: 3,
        title: "Trip.com 内容社区 - 笔记详情页",
        description: "开发并优化 Trip.com 内容社区平台的笔记详情页，通过清晰的设计和顺畅的交互提升用户体验。",
        technologies: ["React", "CSS3", "组件库", "性能优化"],
        features: ["内容展示", "用户交互", "图片画廊", "评论系统"],
        image: tmImage,
        category: "work",
        link: "#"
      },
      {
        id: 4,
        title: "Trip 国内内容社区 - i18n 国际化",
        description: "为 Trip 国内内容社区实现国际化与本地化能力，支持多语言内容和区域偏好。",
        technologies: ["React", "i18next", "国际化", "本地化"],
        features: ["多语言支持", "动态内容加载", "区域管理", "RTL 支持"],
        image: nrImage,
        category: "work",
        link: "#"
      }
    ],
  },
};

const Work = ({ language = "en" }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedId, setSelectedId] = useState(null);
  const listScrollY = useRef(0);
  const t = content[language] || content.en;
  const projects = t.projects;
  const colon = language === "zh" ? "：" : ": ";

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  const selectedProject = projects.find(project => project.id === selectedId);

  // 详情页写入浏览器历史，这样浏览器返回键也能回到列表
  useEffect(() => {
    const onPopState = (event) => {
      setSelectedId(event.state?.projectId ?? null);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    if (selectedId === null) {
      window.scrollTo(0, listScrollY.current);
      return;
    }
    window.scrollTo(0, 0);
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeProject();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedId]);

  const openProject = (id) => {
    listScrollY.current = window.scrollY;
    window.history.pushState({ projectId: id }, '');
    setSelectedId(id);
  };

  function closeProject() {
    if (window.history.state?.projectId != null) {
      window.history.back();
    } else {
      setSelectedId(null);
    }
  }

  const renderCover = (project, style) => (
    project.image ? (
      <img src={project.image} alt={project.title} style={style} className="project-cover" />
    ) : (
      <div style={styles.imagePlaceholder} className="project-cover">{project.title.split(/[:：]/)[0]}</div>
    )
  );

  if (selectedProject) {
    return (
      <div style={styles.projectsShowcase}>
        <div style={styles.detailContainer} className="project-detail">
          <button type="button" style={styles.backButton} className="project-back" onClick={closeProject}>
            ← {t.backToList}
          </button>

          <div style={styles.detailCover}>{renderCover(selectedProject, styles.projectImage)}</div>

          <span style={styles.categoryTag}>{t.filters[selectedProject.category]}</span>
          <h1 style={styles.detailTitle}>{selectedProject.title}</h1>

          <p style={styles.projectDescription}>
            <strong style={styles.featureLead}>{t.introduction}{colon}</strong>
            {selectedProject.description}
          </p>

          {selectedProject.implementation && (
            <div style={styles.features}>
              <div style={styles.sectionTitle}>{t.implementation}</div>
              <ul style={styles.featuresList}>
                {selectedProject.implementation.map((item) => (
                  <li key={item.lead} style={styles.featureItem}>
                    <strong style={styles.featureLead}>{item.lead}{colon}</strong>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div style={styles.techStack}>
            <div style={styles.sectionTitle}>{t.technologyUsed}</div>
            <div style={styles.techTags}>
              {selectedProject.technologies.map((tech) => (
                <span key={tech} style={styles.techTag}>{tech}</span>
              ))}
            </div>
          </div>

          {selectedProject.features && (
            <div style={styles.features}>
              <div style={styles.sectionTitle}>{t.keyFeatures}</div>
              <ul style={styles.featuresList}>
                {selectedProject.features.map((feature) => (
                  <li key={feature} style={styles.featureItem}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={styles.projectsShowcase}>
      <div style={styles.container}>
        <header style={styles.showcaseHeader}>
          <div style={styles.title}>{t.title}</div>
          <p style={styles.subtitle}>{t.subtitle}</p>
        </header>

        <div style={styles.filterButtons}>
          {['all', 'personal', 'work'].map((filter) => (
            <button
              key={filter}
              style={activeFilter === filter ? {...styles.filterButton, ...styles.activeFilter} : styles.filterButton}
              onClick={() => setActiveFilter(filter)}
            >
              {t.filters[filter]}
            </button>
          ))}
        </div>

        <div style={styles.projectsGrid}>
          {filteredProjects.map(project => (
            <button
              key={project.id}
              type="button"
              style={styles.projectCard}
              className="project-card"
              onClick={() => openProject(project.id)}
            >
              <div style={styles.imageContainer}>{renderCover(project, styles.projectImage)}</div>
              <div style={styles.cardBody}>
                <span style={styles.categoryTag}>{t.filters[project.category]}</span>
                <div style={styles.projectTitle}>{project.title}</div>
                <span style={styles.viewDetails} className="project-view-details">
                  {t.viewDetails} <span className="project-arrow">→</span>
                </span>
              </div>
            </button>
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
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 420px), 1fr))',
    gap: '30px'
  },
  projectCard: {
    display: 'block',
    width: '100%',
    padding: 0,
    textAlign: 'left',
    font: 'inherit',
    cursor: 'pointer',
    background: '#fff',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.12)',
    border: '1px solid rgba(102, 51, 153, 0.08)'
  },
  cardBody: {
    padding: '18px 22px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  categoryTag: {
    alignSelf: 'flex-start',
    display: 'inline-block',
    padding: '2px 10px',
    borderRadius: '10px',
    background: 'rgba(230, 230, 250, 0.7)',
    color: '#639',
    fontSize: '0.75rem'
  },
  viewDetails: {
    color: '#999',
    fontSize: '0.85rem'
  },
  detailContainer: {
    maxWidth: '860px',
    margin: '0 auto',
    padding: '20px 0 60px'
  },
  backButton: {
    padding: '8px 16px',
    marginBottom: '24px',
    border: 'none',
    borderRadius: '20px',
    background: 'rgba(230, 230, 250, 0.5)',
    color: '#639',
    font: 'inherit',
    fontSize: '0.9rem',
    cursor: 'pointer'
  },
  detailCover: {
    height: '320px',
    borderRadius: '15px',
    overflow: 'hidden',
    marginBottom: '24px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.12)'
  },
  detailTitle: {
    fontSize: '1.6rem',
    color: '#639',
    fontWeight: '700',
    margin: '12px 0 20px'
  },
  imageContainer: {
    position: 'relative',
    height: '200px',
    overflow: 'hidden'
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #6a11cb 0%, #639 100%)',
    color: '#fff',
    fontSize: '2rem',
    fontWeight: '700',
    letterSpacing: '0.05em'
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
    fontSize: '1.1rem',
    color: '#639',
    fontWeight: '600'
  },
  projectDescription: {
    fontSize: '0.9rem',
    color: '#999',
    marginBottom: '20px',
    lineHeight: '1.6'
  },
  techStack: {
    marginBottom: '20px'
  },
  sectionTitle: {
    fontSize: '1rem',
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
    fontSize: '0.8rem'
  },
  features: {
    marginBottom: '20px'
  },
  featuresList: {
    paddingLeft: '20px'
  },
  featureItem: {
    fontSize: '0.9rem',
    marginBottom: '8px',
    color: '#999',
    lineHeight: '1.6'
  },
  featureLead: {
    color: '#639',
    fontWeight: '600'
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

Object.assign(styles.demoLink, {
  ':hover': {
    background: 'rgba(230, 230, 250, 0.5)',
    transform: 'translateY(-2px)'
  }
});

export default Work;
