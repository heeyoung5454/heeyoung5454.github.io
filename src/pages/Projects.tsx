import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const filters = ['All', 'Vue.js', 'Angular', '데이터 시각화'];

  const projects: Project[] = [
    {
      id: 1,
      title: "마이데이터 자산 통합 조회 서비스",
      description: "Vue.js 기반 B2C 앱 및 B2B 웹뷰 플러그인 개발",
      fullDescription: "마이데이터 API를 활용하여 사용자 자산 정보를 통합 조회할 수 있는 서비스입니다. Vue.js 기반 B2C 앱 화면 및 기업 대상 B2B 웹뷰 플러그인 UI를 구현했습니다.",
      tech: ["Vue.js", "Native Communication", "WebView", "SCSS", "API"],
      category: "Vue.js",
      demo: "https://example.com",
      github: "https://github.com/heeyoung5454/mydata-service",
      features: ["마이데이터 API 연동", "네이티브 앱과 WebView 통신", "자산 데이터 시각화", "B2B 웹뷰 플러그인", "금융 데이터 처리"],
    },
    {
      id: 2,
      title: "AI 기반 마케팅 지원 도구",
      description: "아마존 상품 데이터 분석 및 마케팅 전략 수립 지원",
      fullDescription: "아마존 상품 데이터를 분석하여 트렌드 및 마케팅 전략 수립을 지원하는 도구입니다. AI 솔루션 연계 기능으로 리뷰 분석, 이미지 편집, 상품 소개 문구 추천 등을 제공합니다.",
      tech: ["Vue.js", "Chart.js",  "Matter.js", "API", "SCSS"],
      category: "데이터 시각화",
      demo: "https://example.com",
      github: "https://github.com/heeyoung5454/marketing-tool",
      features: ["상품 데이터 분석", "트렌드 시각화", "AI 리뷰 분석", "이미지 편집 기능", "마케팅 전략 추천"],
    },
    {
      id: 3,
      title: "건강기능식품 비교 분석 페이지",
      description: "데이터 시각화를 통한 제품 분석 서비스",
      fullDescription: "외부 API 연동을 통한 판매량, 순위, 가격 변동 등 데이터를 수집 및 시각화하는 분석 페이지입니다. 고객사의 제품 전략 수립을 지원합니다.",
      tech: ["Vue.js", "Chart.js", "Vitepress", "API", "SCSS"],
      category: "데이터 시각화",
      demo: "https://example.com",
      github: "https://github.com/heeyoung5454/supplement-analysis",
      features: ["판매량 데이터 시각화", "가격 변동 분석", "제품 순위 표시", "필터링 및 검색", "분석 리포트 생성"],
    },
    {
      id: 4,
      title: "사내 복지 앱",
      description: "Vue.js 기반 WebView 앱 UI 개발",
      fullDescription: "사내 복지 앱으로 임직원들을 위한 복지 앱입니다. 사이렌오더 기능과 GPS 인증 이벤트등이 포함됩니다. 접근성을 강화한 사용자 친화적인 인터페이스를 구현했습니다.",
      tech: ["Vue.js", "JavaScript", "WebView", "SCSS", "GPS"],
      category: "Vue.js",
      demo: "https://example.com",
      github: "https://github.com/heeyoung5454/welfare-app",
      features: ["주문 예약 현황 관리", "GPS 인증 이벤트", "접근성 강화", "관리자 주문 목록", "지도 시각화"],
    },
    {
      id: 5,
      title: "API 서비스 홈페이지",
      description: "Angular 기반 홈페이지 유지보수 및 Vue 마이그레이션",
      fullDescription: "Angular 기반 홈페이지 유지보수 및 기능 추가, 점진적 Vue 마이그레이션을 수행했습니다. Vue 및 JavaScript 기반 어드민 시스템도 함께 관리했습니다.",
      tech: ["Angular", "Vue.js", "JavaScript", "SCSS", "API"],
      category: "Angular",
      demo: "https://codef.io",
      github: "https://github.com/heeyoung5454/api-website",
      features: ["Angular 홈페이지 유지보수", "Vue 마이그레이션", "어드민 시스템 관리", "API 문서화", "레거시 코드 개선"],
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

  const goToPreview = (projectId: number) => {
    closeProjectModal();
    navigate(`/preview/${projectId}`);
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
                      사이트
                    </a>
                  )}
                  <button onClick={() => goToPreview(selectedProject.id)} className="btn btn-secondary">
                    미리보기
                  </button>
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
