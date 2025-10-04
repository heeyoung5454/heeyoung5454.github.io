import React from 'react';
import './About.scss';

const About: React.FC = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      name: "Styling",
      skills: [
        { name: "SCSS/Sass", level: 90 },
        { name: "CSS Modules", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Styled Components", level: 75 },
      ],
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Node.js", level: 70 },
        { name: "Webpack", level: 75 },
        { name: "Vite", level: 85 },
      ],
    },
  ];

  const experience = [
    {
      id: 1,
      period: "2023 - 현재",
      title: "프론트엔드 개발자",
      company: "프리랜서",
      description: "다양한 클라이언트의 웹 애플리케이션 개발 프로젝트를 진행하며, React와 Vue.js를 활용한 반응형 웹사이트 개발에 집중하고 있습니다.",
      tech: ["React", "Vue.js", "TypeScript", "SCSS"],
    },
    {
      id: 2,
      period: "2022 - 2023",
      title: "주니어 프론트엔드 개발자",
      company: "웹 에이전시",
      description: "기업 웹사이트 및 랜딩 페이지 개발을 담당하며, 사용자 경험 개선과 성능 최적화에 중점을 두었습니다.",
      tech: ["Vue.js", "JavaScript", "SCSS", "jQuery"],
    },
    {
      id: 3,
      period: "2021 - 2022",
      title: "웹 개발 교육",
      company: "부트캠프",
      description: "프론트엔드 개발 기초부터 실무까지 체계적인 교육을 받으며, 다양한 프로젝트를 통해 실무 경험을 쌓았습니다.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
    },
  ];

  const interests = [
    {
      name: "UI/UX 디자인",
      description: "사용자 중심의 직관적인 인터페이스 설계에 관심이 많습니다.",
      icon: "🎨",
    },
    {
      name: "성능 최적화",
      description: "웹 애플리케이션의 로딩 속도와 사용자 경험 개선에 집중합니다.",
      icon: "⚡",
    },
    {
      name: "새로운 기술",
      description: "최신 프론트엔드 트렌드와 기술을 지속적으로 학습하고 적용합니다.",
      icon: "🚀",
    },
    {
      name: "오픈소스",
      description: "오픈소스 프로젝트에 기여하며 개발 커뮤니티와 함께 성장합니다.",
      icon: "🌟",
    },
  ];

  return (
    <div className="about">
      {/* 히어로 섹션 */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">About Me</h1>
            <p className="hero-subtitle">사용자 중심의 웹 애플리케이션을 만드는 프론트엔드 개발자</p>
          </div>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section className="intro">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>안녕하세요, HeeYoung입니다!</h2>
              <p>
                프론트엔드 개발자로서 사용자 경험을 최우선으로 생각하며, 현대적이고 반응형 웹 애플리케이션을 개발합니다. 깔끔하고 직관적인 인터페이스를 통해 사용자에게 최고의 경험을 제공하는 것이 저의
                목표입니다.
              </p>
              <p>React, Vue.js, TypeScript 등 최신 기술을 활용하여 효율적이고 확장 가능한 코드를 작성하며, 지속적으로 새로운 기술을 학습하고 적용하고 있습니다.</p>
            </div>
            <div className="intro-image">
              <div className="image-placeholder">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 기술 스택 섹션 */}
      <section className="skills">
        <div className="container">
          <h2 className="section-title">기술 스택</h2>
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <h3>{category.name}</h3>
                <div className="skill-items">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 경력 섹션 */}
      <section className="experience">
        <div className="container">
          <h2 className="section-title">경력 & 교육</h2>
          <div className="timeline">
            {experience.map((item) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-period">{item.period}</div>
                  <h3>{item.title}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.description}</p>
                  <div className="timeline-tech">
                    {item.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 관심사 섹션 */}
      <section className="interests">
        <div className="container">
          <h2 className="section-title">관심사</h2>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div key={index} className="interest-item">
                <div className="interest-icon">
                  {interest.icon}
                </div>
                <h3>{interest.name}</h3>
                <p>{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
