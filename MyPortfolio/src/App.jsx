import { useState } from "react";
import "./App.css";

const skills = [
  {
    name: "C++",
    icon: "⚙️",
    level: "Programming",
    url: "https://www.youtube.com/results?search_query=CodeArmy+C%2B%2B+tutorial"
  },
  {
    name: "Data Structures & Algorithms",
    icon: "🧠",
    level: "Problem Solving",
    url: "https://www.youtube.com/results?search_query=Apna+College+DSA+C%2B%2B"
  },
  {
    name: "HTML5",
    icon: "🌐",
    level: "Web Development",
    url: "https://www.youtube.com/results?search_query=Apna+College+HTML+course"
  },
  {
    name: "CSS3",
    icon: "🎨",
    level: "Web Development",
    url: "https://www.youtube.com/results?search_query=Apna+College+CSS+course"
  },
  {
    name: "JavaScript",
    icon: "⚡",
    level: "Web Development",
    url: "https://www.youtube.com/results?search_query=Apna+College+JavaScript+course"
  },
  {
    name: "React",
    icon: "⚛️",
    level: "Frontend Development",
    url: "https://www.youtube.com/results?search_query=Chai+aur+Code+React+course"
  },
  {
    name: "Git",
    icon: "🔀",
    level: "Version Control",
    url: "https://www.youtube.com/results?search_query=Apna+College+Git+GitHub+tutorial"
  },
  {
    name: "GitHub",
    icon: "🐙",
    level: "Code Management",
    url: "https://www.youtube.com/results?search_query=Apna+College+GitHub+tutorial"
  }
];

const projects = [
  {
    number: "01",
    title: "Amazon Clone",
    category: "Frontend Development",
    description:
      "An Amazon-inspired responsive shopping website featuring a navigation bar, product sections and responsive layouts.",
    tech: ["HTML", "CSS", "Responsive Design"],
    icon: "🛍️",
    repo: "https://github.com/VikasThakur-tach/amazon-clone",
    live: "https://amazon-clone-lyart-eight.vercel.app/",
    featured: true
  },
  {
    number: "02",
    title: "Currency Converter",
    category: "React Application",
    description:
      "A currency converter with API integration, currency selection, country flags and input validation.",
    tech: ["React", "Tailwind CSS", "API"],
    icon: "💱",
    repo: "https://github.com/VikasThakur-tach/react-learning/tree/main/06currenyConvetor",
    live: "https://react-learning-4mow.vercel.app/"
  },
  {
    number: "03",
    title: "Password Generator",
    category: "React Application",
    description:
      "A React application that generates passwords with configurable length and number or special-character options.",
    tech: ["React", "JavaScript", "CSS"],
    icon: "🔐",
    repo: "https://github.com/VikasThakur-tach/react-learning/tree/main/05passwordGenreter"
  },
  {
    number: "04",
    title: "Tic-Tac-Toe",
    category: "Game Development",
    description:
      "A responsive Tic-Tac-Toe game created to practise programming logic and interactive user interfaces.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    icon: "❎",
    repo: "https://github.com/VikasThakur-tach/Tic-Tac-Toe-Game",
    live: "https://tic-tac-toe-game-woad-seven.vercel.app/"
  },
  {
    number: "05",
    title: "Rock Paper Scissors",
    category: "Game Development",
    description:
      "An interactive game featuring player choices, computer moves and result-based game logic.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "✊",
    repo: "https://github.com/VikasThakur-tach/Rock-Paper-Scissors--Game"
  },
  {
    number: "06",
    title: "Hotel Website",
    category: "Web Development",
    description:
      "A hotel website project created to practise page structure, styling and user-friendly web layouts.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "🏨",
    repo: "https://github.com/VikasThakur-tach/Restaurant-website"
  },
  {
    number: "07",
    title: "Theme Switcher",
    category: "React Application",
    description:
      "A collection of React learning projects and practical exercises built while learning React.",
    tech: ["React", "JavaScript"],
    icon: "⚛️",
    repo: "https://github.com/VikasThakur-tach/react-learning",
    live: "https://react-learning-9uva.vercel.app/"
  },
  {
    number: "08",
    title: "Interactive Gallery Portfolio",
    category: "Web Development",
    description:
      "An interactive portfolio experience built with React, Vite and CSS.",
    tech: ["React", "Vite", "CSS"],
    icon: "🎨",
    repo: ""
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Web Development",
    "Frontend Development",
    "React Application",
    "Game Development"
  ];

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={lightMode ? "portfolio light-mode" : "portfolio"}>
      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>

      <header className="navbar">
        <a className="logo" href="#home" onClick={closeMenu}>
          VT<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setLightMode(!lightMode)}
            aria-label="Toggle theme"
            title="Toggle light and dark mode"
          >
            {lightMode ? "🌙" : "☀️"}
          </button>

          <a className="nav-resume" href="#contact">
            Let's Talk ↗
          </a>
        </div>
      </header>

      <main>
        <section className="hero section-container" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              BSc CS Student · Aspiring Developer
            </div>

            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Vikas
              <span className="gradient-text"> Thakur.</span>
            </h1>

            <h2>
              I build things for <span>the web.</span>
            </h2>

            <p className="hero-description">
              I'm a Computer Science student passionate about programming,
              problem-solving and web development. I'm learning to turn ideas
              into useful, interactive digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button button-primary">
                Explore My Work <span>↗</span>
              </a>

              <a href="#contact" className="button button-outline">
                Get In Touch
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/VikasThakur-tach"
                
                rel="noopener noreferrer"
              >
                <span>⌘</span> GitHub ↗
              </a>

              <a
                 href="https://www.linkedin.com/in/vikas-thakur-70225a411"
                
                rel="noopener noreferrer"
              >
                <span>↗</span> LinkedIn
              </a>

              <span className="social-divider"></span>
              <span className="hero-location">📍 India</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="profile-card">
              <div className="profile-card-top">
                <span className="window-dot red"></span>
                <span className="window-dot yellow"></span>
                <span className="window-dot green"></span>
                <span className="profile-card-label">developer.profile</span>
              </div>

              <div className="profile-photo-frame">
                <div className="profile-photo">
                  <img
                    src="/profile.jpg"
                    alt="Vikas Thakur"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      event.currentTarget.nextElementSibling.style.display = "flex";
                    }}
                  />
                  <div className="avatar-fallback">VT</div>
                </div>

                <span className="photo-decoration decoration-one"></span>
                <span className="photo-decoration decoration-two"></span>
              </div>

              <div className="profile-info">
                <h3>Vikas Thakur</h3>
                <p>Learning. Building. Improving.</p>

                <div className="profile-tags">
                  <span>React</span>
                  <span>C++</span>
                  <span>DSA</span>
                </div>
              </div>

              <div className="profile-card-bottom">
                <span>const developer = true;</span>
                <span className="typing-cursor">▍</span>
              </div>
            </div>

            <div className="floating-badge badge-react">
              <span>⚛️</span> React
            </div>

            <div className="floating-badge badge-code">
              <span>⌨️</span> C++ / DSA
            </div>

            <div className="floating-badge badge-web">
              <span>🌐</span> Web Dev
            </div>
          </div>

          <a href="#about" className="scroll-indicator">
            <span className="scroll-line"></span>
            SCROLL TO EXPLORE
          </a>
        </section>

        <section className="section-container about-section" id="about">
          <div className="section-heading">
            <span className="section-kicker">01 / ABOUT ME</span>
            <h2>
              A little about <span className="gradient-text">my journey.</span>
            </h2>
            <p>Curious mind. Consistent learner. Future software developer.</p>
          </div>

          <div className="about-grid">
            <div className="about-main glass-card">
              <span className="card-symbol">✳</span>
              <h3>Learning by building.</h3>

              <p>
                I'm pursuing a BSc in Computer Science and building my
                foundation in programming, Data Structures and Algorithms,
                and frontend development. I enjoy solving coding problems
                and creating projects that help me learn by doing.
              </p>

              <p>
                My current focus is improving my React skills, writing better
                code and gradually becoming a well-rounded software developer.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card glass-card">
                <span className="stat-icon">🎓</span>
                <strong>BSc CS</strong>
                <span>Computer Science</span>
              </div>

              <div className="stat-card glass-card">
                <span className="stat-icon">💻</span>
                <strong>DSA + Web</strong>
                <span>Learning & practising</span>
              </div>

              <div className="stat-card glass-card">
                <span className="stat-icon">🚀</span>
                <strong>Project Driven</strong>
                <span>Building as I learn</span>
              </div>

              <div className="stat-card glass-card">
                <span className="stat-icon">📚</span>
                <strong>Always Learning</strong>
                <span>One step at a time</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-container skills-section" id="skills">
          <div className="section-heading">
            <span className="section-kicker">02 / TECHNICAL ARSENAL</span>
            <h2>
              Tools I use to <span className="gradient-text">create.</span>
            </h2>
            <p>Click any skill to explore the tutorials I'm learning from.</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <a
                className="skill-card glass-card"
                href={skill.url}
                key={skill.name}
                
                rel="noopener noreferrer"
                title={`Find ${skill.name} tutorials on YouTube`}
              >
                <div className="skill-top">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="external-arrow">↗</span>
                </div>

                <h3>{skill.name}</h3>
                <p>{skill.level}</p>
                <div className="skill-link-label">Explore tutorials ↗</div>
              </a>
            ))}
          </div>

          <p className="skills-note">
            Learning resources: Apna College · CodeArmy · Chai aur Code
          </p>
        </section>

        <section className="section-container projects-section" id="projects">
          <div className="section-heading">
            <span className="section-kicker">03 / SELECTED WORK</span>
            <h2>
              Things I've <span className="gradient-text">built.</span>
            </h2>
            <p>Small projects, real practice, continuous improvement.</p>
          </div>

          <div className="project-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "filter active" : "filter"}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <article className="project-card glass-card" key={project.number}>
                <div className="project-visual">
                  <div className="project-visual-grid"></div>
                  <span className="project-number">{project.number}</span>
                  <span className="project-big-icon">{project.icon}</span>
                  <span className="project-visual-label">
                    PROJECT / {project.number}
                  </span>
                </div>

                <div className="project-content">
                  <div className="project-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {project.repo ? (
                      <a
                        className="project-link"
                        href={project.repo}
                        
                        rel="noopener noreferrer"
                      >
                        <span>⌘</span> Code ↗
                      </a>
                    ) : (
                      <span
                        className="project-link project-link-disabled"
                        aria-label="Code link not added yet"
                        title="GitHub link will be added later"
                      >
                        <span>⌘</span> Code
                      </span>
                    )}

                    {project.live && (
                      <a
                        className="project-link live-project-link"
                        href={project.live}
                        
                        rel="noopener noreferrer"
                      >
                        <span>↗</span> Live Link
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="project-note">
            More project links will be added as they become available.
          </p>

          <a
            className="button button-outline all-projects-button"
            href="https://github.com/VikasThakur-tach"
            
            rel="noopener noreferrer"
          >
            Explore GitHub Profile ↗
          </a>
        </section>

        <section className="section-container education-section" id="education">
          <div className="section-heading">
            <span className="section-kicker">04 / EDUCATION</span>
            <h2>
              My learning <span className="gradient-text">journey.</span>
            </h2>
            <p>The foundation I'm building for my future in technology.</p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>

              <div className="timeline-card glass-card">
                <span className="timeline-date">CURRENTLY PURSUING</span>
                <h3>Bachelor of Science in Computer Science</h3>
                <p className="timeline-subtitle">BSc CS</p>
                <p>
                  Studying computer science fundamentals while practising
                  programming, algorithms and web development.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>

              <div className="timeline-card glass-card">
                <span className="timeline-date">CONTINUOUS LEARNING</span>
                <h3>Programming & Web Development</h3>
                <p className="timeline-subtitle">
                  Self-learning and personal projects
                </p>
                <p>
                  Learning C++ and DSA through Apna College and CodeArmy,
                  and learning React through Chai aur Code. Practising
                  HTML, CSS and JavaScript through hands-on projects.
                </p>
              </div>
            </div>
          </div>

          <div className="certification-note glass-card">
            <span>📌</span>
            <p>
              Certifications can be added here when you provide the exact
              course or certificate details.
            </p>
          </div>
        </section>

        <section className="section-container contact-section" id="contact">
          <div className="contact-card">
            <span className="section-kicker">05 / GET IN TOUCH</span>
            <div className="contact-decoration">✳</div>

            <h2>
              Have an idea? Let's <span className="gradient-text">connect.</span>
            </h2>

            <p>
              I'm always interested in learning, collaborating on projects
              and connecting with people who enjoy building things with technology.
            </p>

            <div className="contact-buttons">
              <a
                className="button button-primary"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vt7087369@gmail.com"
                
                rel="noopener noreferrer"
              >
                ✉ Email Me
              </a>

              <a
                className="button button-outline"
                href="https://github.com/VikasThakur-tach"
                
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a
                className="button button-outline"
                href="https://www.linkedin.com/in/vikas-thakur-70225a411"
                
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>

            <a className="resume-link" href="/Vikas_Thakur_Resume.pdf" download>
              <span>📄</span>
              <span>
                <strong>Download Resume</strong>
                <small>Add your resume PDF to the public folder</small>
              </span>
              <span className="resume-arrow">↓</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          VT<span>.</span>
        </a>

        <p>Designed & built with React, CSS and ☕</p>
        <a href="#home" className="back-to-top">Back to top ↑</a>
        <span className="copyright">
          © {new Date().getFullYear()} Vikas Thakur
        </span>
      </footer>
    </div>
  );
}

export default App;