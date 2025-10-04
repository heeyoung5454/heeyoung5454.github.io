import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';
import './Home.scss';

const Home: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const parallaxOffset = useParallax();
  const animationFrameRef = useRef<number>();
  
  const [heroRef, heroVisible] = useScrollAnimation(0.3);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    animationFrameRef.current = requestAnimationFrame(() => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [handleMouseMove]);

  const techStack = [
    {
      name: "React",
      description: "컴포넌트 기반 개발",
      icon: "⚛️",
    },
    {
      name: "TypeScript",
      description: "타입 안전성",
      icon: "🔷",
    },
    {
      name: "JavaScript",
      description: "ES6+ 문법 활용",
      icon: "🟨",
    },
    {
      name: "Vue.js",
      description: "반응형 UI 개발",
      icon: "💚",
    },
    {
      name: "SCSS",
      description: "스타일링",
      icon: "🎨",
    },
    {
      name: "Node.js",
      description: "백엔드 개발",
      icon: "🟢",
    },
  ];

  const recentProjects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "React와 Node.js를 활용한 온라인 쇼핑몰",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Vue.js로 개발한 프로젝트 관리 도구",
      tech: ["Vue.js", "TypeScript", "Firebase"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "반응형 포트폴리오 웹사이트",
      tech: ["React", "SCSS", "Vite"],
    },
  ];

  return (
    <div className="home">
      {/* 히어로 섹션 */}
      <section 
        ref={heroRef}
        className={`hero ${heroVisible ? 'visible' : ''} ${isLoaded ? 'loaded' : ''}`}
            style={{
              backgroundPosition: `${mousePosition.x * 0.01}% ${mousePosition.y * 0.01}%`
            }}
      >
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className={`title-line ${heroVisible ? 'animate' : ''}`}>안녕하세요!</span>
              <br />
              <span className={`gradient-text title-line ${heroVisible ? 'animate delay-1' : ''}`}>HeeYoung</span>
              <span className={`title-line ${heroVisible ? 'animate delay-2' : ''}`}>입니다</span>
            </h1>
            <p className={`hero-description ${heroVisible ? 'animate delay-3' : ''}`}>
              사용자 경험을 중시하는 프론트엔드 개발자로, 현대적이고 반응형 웹 애플리케이션을 만듭니다.
            </p>
            <div className={`hero-buttons ${heroVisible ? 'animate delay-4' : ''}`}>
              <Link to="/projects" className="btn btn-primary hover-lift"> 
                프로젝트 보기 
              </Link>
              <Link to="/contact" className="btn btn-secondary hover-lift"> 
                연락하기 
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div 
              className="profile-card floating-card"
                  style={{
                    transform: `translate3d(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px, 0) translateY(${parallaxOffset * 0.05}px)`
                  }}
            >
              <div className="profile-image">
                <div className="image-placeholder pulse-animation">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <div className="glow-effect"></div>
                </div>
              </div>
              <div className="profile-info">
                <h3>HeeYoung</h3>
                <p>Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 기술 스택 섹션 */}
      <section className="tech-stack">
        <div className="container">
          <h2 className="section-title">기술 스택</h2>
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-item">
                <div className="tech-icon">
                  <span>{tech.icon}</span>
                </div>
                <h3>{tech.name}</h3>
                <p>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 최근 프로젝트 미리보기 */}
      <section className="recent-projects">
        <div className="container">
          <h2 className="section-title">최근 프로젝트</h2>
          <div className="projects-grid">
            {recentProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="image-placeholder">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                    </svg>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="projects-cta">
            <Link to="/projects" className="btn btn-outline">모든 프로젝트 보기</Link>
          </div>
        </div>
      </section>

      {/* 연락처 CTA */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>함께 일하고 싶으신가요?</h2>
            <p>새로운 프로젝트나 협업 기회에 대해 이야기해보세요.</p>
            <Link to="/contact" className="btn btn-primary btn-large">연락하기</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
