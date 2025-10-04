import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Preview.scss';

interface ProjectPreview {
  id: number;
  title: string;
  description: string;
  category: string;
  tech: string[];
  media: {
    type: 'image' | 'video';
    url: string;
    alt?: string;
  }[];
  features: string[];
  github: string;
  demo?: string;
}

const Preview: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectPreview | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // 프로젝트 데이터 (실제 프로젝트와 동일)
  const projects: ProjectPreview[] = [
    {
      id: 1,
      title: "마이데이터 자산 통합 조회 서비스",
      description: "Vue.js 기반 B2C 앱 및 B2B 웹뷰 플러그인 개발",
      category: "Vue.js",
      tech: ["Vue.js", "Native Communication", "WebView", "SCSS", "API"],
      media: [
        {
          type: 'image',
          url: '/preview/mydata-1.jpg',
          alt: '마이데이터 서비스 메인 화면'
        },
        {
          type: 'image',
          url: '/preview/mydata-2.jpg',
          alt: '자산 조회 화면'
        },
        {
          type: 'video',
          url: '/preview/mydata-demo.mp4',
          alt: '마이데이터 서비스 데모 영상'
        }
      ],
      features: ["마이데이터 API 연동", "네이티브 앱과 WebView 통신", "자산 데이터 시각화", "B2B 웹뷰 플러그인", "금융 데이터 처리"],
      github: "https://github.com/heeyoung5454/mydata-service",
      demo: "https://example.com"
    },
    {
      id: 2,
      title: "AI 기반 마케팅 지원 도구",
      description: "아마존 상품 데이터 분석 및 마케팅 전략 수립 지원",
      category: "데이터 시각화",
      tech: ["Vue.js", "Chart.js", "Matter.js", "API", "SCSS"],
      media: [
        {
          type: 'image',
          url: '/preview/marketing-1.jpg',
          alt: '마케팅 도구 대시보드'
        },
        {
          type: 'image',
          url: '/preview/marketing-2.jpg',
          alt: '상품 분석 차트'
        },
        {
          type: 'video',
          url: '/preview/marketing-demo.mp4',
          alt: 'AI 마케팅 도구 데모 영상'
        }
      ],
      features: ["상품 데이터 분석", "트렌드 시각화", "AI 리뷰 분석", "이미지 편집 기능", "마케팅 전략 추천"],
      github: "https://github.com/heeyoung5454/marketing-tool",
      demo: "https://example.com"
    },
    {
      id: 3,
      title: "건강기능식품 비교 분석 페이지",
      description: "데이터 시각화를 통한 제품 분석 서비스",
      category: "데이터 시각화",
      tech: ["Vue.js", "Chart.js", "Vitepress", "API", "SCSS"],
      media: [
        {
          type: 'image',
          url: '/preview/supplement-1.jpg',
          alt: '건강기능식품 분석 페이지'
        },
        {
          type: 'image',
          url: '/preview/supplement-2.jpg',
          alt: '제품 비교 차트'
        }
      ],
      features: ["판매량 데이터 시각화", "가격 변동 분석", "제품 순위 표시", "필터링 및 검색", "분석 리포트 생성"],
      github: "https://github.com/heeyoung5454/supplement-analysis",
      demo: "https://example.com"
    },
    {
      id: 4,
      title: "사내 복지 앱",
      description: "Vue.js 기반 WebView 앱 UI 개발",
      category: "Vue.js",
      tech: ["Vue.js", "JavaScript", "WebView", "SCSS", "GPS"],
      media: [
        {
          type: 'image',
          url: '/preview/welfare-1.jpg',
          alt: '사내 복지 앱 메인 화면'
        },
        {
          type: 'image',
          url: '/preview/welfare-2.jpg',
          alt: '사이렌오더 화면'
        },
        {
          type: 'video',
          url: '/preview/welfare-demo.mp4',
          alt: '복지 앱 데모 영상'
        }
      ],
      features: ["주문 예약 현황 관리", "GPS 인증 이벤트", "접근성 강화", "관리자 주문 목록", "지도 시각화"],
      github: "https://github.com/heeyoung5454/welfare-app",
      demo: "https://example.com"
    },
    {
      id: 5,
      title: "API 서비스 홈페이지",
      description: "Angular 기반 홈페이지 유지보수 및 Vue 마이그레이션",
      category: "Angular",
      tech: ["Angular", "Vue.js", "JavaScript", "SCSS", "API"],
      media: [
        {
          type: 'image',
          url: '/preview/api-1.jpg',
          alt: 'API 서비스 홈페이지'
        },
        {
          type: 'image',
          url: '/preview/api-2.jpg',
          alt: '어드민 시스템'
        }
      ],
      features: ["Angular 홈페이지 유지보수", "Vue 마이그레이션", "어드민 시스템 관리", "API 문서화", "레거시 코드 개선"],
      github: "https://github.com/heeyoung5454/api-website",
      demo: "https://codef.io"
    }
  ];

  useEffect(() => {
    if (projectId) {
      const foundProject = projects.find(p => p.id === parseInt(projectId));
      if (foundProject) {
        setProject(foundProject);
      } else {
        navigate('/projects');
      }
    }
    setLoading(false);
  }, [projectId, navigate]);

  const nextMedia = () => {
    if (project && currentMediaIndex < project.media.length - 1) {
      setCurrentMediaIndex(currentMediaIndex + 1);
    }
  };

  const prevMedia = () => {
    if (currentMediaIndex > 0) {
      setCurrentMediaIndex(currentMediaIndex - 1);
    }
  };

  const goToProject = () => {
    navigate('/projects');
  };

  if (loading) {
    return (
      <div className="preview-loading">
        <div className="loading-spinner"></div>
        <p>프로젝트를 불러오는 중...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="preview-error">
        <h2>프로젝트를 찾을 수 없습니다</h2>
        <button onClick={goToProject} className="btn btn-primary">
          프로젝트 목록으로 돌아가기
        </button>
      </div>
    );
  }

  const currentMedia = project.media[currentMediaIndex];

  return (
    <div className="preview">
      <div className="preview-header">
        <div className="project-info">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="tech-tags">
            {project.tech.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="preview-content">
        <div className="media-section">
          <div className="media-container">
            {currentMedia.type === 'image' ? (
              <img 
                src={currentMedia.url} 
                alt={currentMedia.alt || project.title}
                onError={(e) => {
                  e.currentTarget.src = '/preview/placeholder.svg';
                }}
              />
            ) : (
              <video 
                controls
                poster={`/preview/${project.id}-poster.jpg`}
              >
                <source src={currentMedia.url} type="video/mp4" />
                브라우저가 비디오를 지원하지 않습니다.
              </video>
            )}
            
            {project.media.length > 1 && (
              <>
                <button 
                  className="media-nav prev" 
                  onClick={prevMedia}
                  disabled={currentMediaIndex === 0}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                </button>
                
                <button 
                  className="media-nav next" 
                  onClick={nextMedia}
                  disabled={currentMediaIndex === project.media.length - 1}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                  </svg>
                </button>
              </>
            )}
          </div>
          
          {project.media.length > 1 && (
            <div className="media-thumbnails">
              {project.media.map((media, index) => (
                <button
                  key={index}
                  className={`thumbnail ${index === currentMediaIndex ? 'active' : ''}`}
                  onClick={() => setCurrentMediaIndex(index)}
                >
                  {media.type === 'image' ? (
                    <img 
                      src={media.url} 
                      alt={media.alt || `미리보기 ${index + 1}`}
                      onError={(e) => {
                        e.currentTarget.src = '/preview/placeholder.svg';
                      }}
                    />
                  ) : (
                    <div className="video-thumbnail">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="project-details">
          <div className="features-section">
            <h3>주요 기능</h3>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            
            {project.demo && (
              <div className="demo-link">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                  </svg>
                  사이트 보기
                </a>
              </div>
            )}
          </div>
        </div>

        <button onClick={goToProject} className="back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
          프로젝트 목록으로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default Preview;
