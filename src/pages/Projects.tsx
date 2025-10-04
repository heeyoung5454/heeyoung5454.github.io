import React, { useState, useMemo } from 'react';
import './Projects.scss';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  category: string;
  demo?: string;
  github: string;
  features: string[];
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ['All', 'React', 'Vue.js', 'JavaScript', 'TypeScript'];

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "React와 Node.js를 활용한 온라인 쇼핑몰",
      fullDescription: "사용자 친화적인 인터페이스와 안전한 결제 시스템을 갖춘 완전한 전자상거래 플랫폼입니다. 반응형 디자인과 실시간 재고 관리 기능을 포함합니다.",
      tech: ["React", "Node.js", "MongoDB", "SCSS", "Stripe"],
      category: "React",
      demo: "https://example.com",
      github: "https://github.com/heeyoung5454/ecommerce",
      features: ["사용자 인증 및 권한 관리", "상품 검색 및 필터링", "장바구니 및 위시리스트", "안전한 결제 시스템", "관리자 대시보드"],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Vue.js로 개발한 프로젝트 관리 도구",
      fullDescription: "팀 협업을 위한 직관적인 프로젝트 관리 애플리케이션입니다. 칸반 보드, 일정 관리, 파일 공유 등 다양한 기능을 제공합니다.",
      tech: ["Vue.js", "TypeScript", "Firebase", "Material-UI"],
      category: "Vue.js",
      demo: "https://example.com",
      github: "https://github.com/heeyoung5454/taskmanager",
      features: ["드래그 앤 드롭 칸반 보드", "실시간 협업 기능", "파일 첨부 및 댓글", "일정 및 알림 관리", "프로젝트 통계 및 리포트"],
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "실시간 날씨 정보 대시보드",
      fullDescription: "API를 활용한 실시간 날씨 정보를 제공하는 대시보드입니다. 위치 기반 서비스와 7일 예보 기능을 포함합니다.",
      tech: ["JavaScript", "API", "Chart.js", "CSS"],
      category: "JavaScript",
      demo: "https://example.com",
      github: "https://github.com/heeyoung5454/weather",
      features: ["실시간 날씨 정보", "위치 기반 서비스", "7일 날씨 예보", "인터랙티브 차트", "다크/라이트 모드"],
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "반응형 포트폴리오 웹사이트",
      fullDescription: "현대적이고 반응형 디자인의 개인 포트폴리오 웹사이트입니다. 프로젝트 소개, 기술 스택, 연락처 정보를 포함합니다.",
      tech: ["React", "SCSS", "Vite", "TypeScript"],
      category: "React",
      demo: "https://example.com",
      github: "https://github.com/heeyoung5454/portfolio",
      features: ["반응형 디자인", "다크/라이트 테마", "애니메이션 효과", "SEO 최적화", "성능 최적화"],
    },
    {
      id: 5,
      title: "Chat Application",
      description: "실시간 채팅 애플리케이션",
      fullDescription: "WebSocket을 활용한 실시간 채팅 애플리케이션입니다. 그룹 채팅, 파일 공유, 이모지 지원 등의 기능을 제공합니다.",
      tech: ["React", "TypeScript", "Socket.io", "Node.js"],
      category: "React",
      demo: "https://example.com",
      github: "https://github.com/heeyoung5454/chat",
      features: ["실시간 메시징", "그룹 채팅방", "파일 및 이미지 공유", "이모지 및 스티커", "온라인 상태 표시"],
    },
    {
      id: 6,
      title: "Blog CMS",
      description: "마크다운 기반 블로그 CMS",
      fullDescription: "마크다운 에디터와 카테고리 관리 기능을 갖춘 블로그 CMS입니다. 관리자 대시보드와 댓글 시스템을 포함합니다.",
      tech: ["Vue.js", "TypeScript", "Markdown", "Express"],
      category: "Vue.js",
      demo: "https://example.com",
      github: "https://github.com/heeyoung5454/blog-cms",
      features: ["마크다운 에디터", "카테고리 및 태그 관리", "댓글 시스템", "SEO 최적화", "관리자 대시보드"],
    },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="projects">
      {/* 히어로 섹션 */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">My Projects</h1>
            <p className="hero-subtitle">사용자 경험을 중시하며 개발한 다양한 웹 애플리케이션들을 소개합니다.</p>
          </div>
        </div>
      </section>

      {/* 프로젝트 필터 */}
      <section className="filters">
        <div className="container">
          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 프로젝트 그리드 */}
      <section className="projects-grid">
        <div className="container">
          <div className="projects-container">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card" onClick={() => openProjectModal(project)}>
                <div className="project-image">
                  <div className="image-placeholder">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                    </svg>
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                          </svg>
                        </a>
                      )}
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 프로젝트 모달 */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeProjectModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
              </svg>
            </button>

            <div className="modal-body">
              <div className="modal-image">
                <div className="image-placeholder">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                  </svg>
                </div>
              </div>

              <div className="modal-info">
                <h2>{selectedProject.title}</h2>
                <p className="modal-description">{selectedProject.fullDescription}</p>

                <div className="modal-tech">
                  <h4>기술 스택</h4>
                  <div className="tech-tags">
                    {selectedProject.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-features">
                  <h4>주요 기능</h4>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-links">
                  {selectedProject.demo && (
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      라이브 데모
                    </a>
                  )}
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
