import './App.css';
import eliVillasImg from './assets/images/Eli.png';
import syArYoImg from './assets/images/Sy-Ar.png';
import yesEducationImg from './assets/images/Yes.png';
import dentalGlossaryImg from './assets/images/Dental.png';
import devcollabImg from './assets/images/Dev.png';

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">Etnik Isufi</h1>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Etnik Isufi</h1>
            <h2>Front-end Developer</h2>
            <p>17 years old | Specializing in HTML, CSS, JavaScript, React, Node.js, and WordPress</p>
            <a href="#contact" className="cta-btn">Get In Touch</a>
          </div>
          <div className="hero-image">
            <div className="profile-placeholder"></div>
          </div>
        </div>
      </header>

      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hello! I'm Etnik Isufi, a dedicated 17-year-old front-end developer with a passion for creating
                efficient, user-friendly, and visually appealing websites. My journey in web development began
                with a curiosity about how websites work, and it has evolved into a commitment to delivering
                high-quality digital solutions.
              </p>
              <p>
                I specialize in modern web technologies including HTML5, CSS3, JavaScript, React, Node.js,
                and WordPress. My approach combines technical expertise with creative problem-solving to
                build websites that not only look great but also perform exceptionally.
              </p>
              <p>
                When I'm not coding, I enjoy collaborating on open-source projects and staying up-to-date
                with the latest trends in web development. I'm always eager to take on new challenges and
                contribute to meaningful projects.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>5+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>6</h3>
                <p>Technologies Mastered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience">
        <div className="container">
          <h2>Experience & Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Front-end Developer</h3>
                <p className="company">Freelance</p>
                <p className="period">2023 - Present</p>
                <ul>
                  <li>Developed responsive websites using HTML, CSS, and JavaScript</li>
                  <li>Built interactive web applications with React and Node.js</li>
                  <li>Created custom WordPress themes and plugins</li>
                  <li>Collaborated with clients to deliver projects on time and within budget</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Web Development Student</h3>
                <p className="company">Self-Taught & Online Courses</p>
                <p className="period">2021 - Present</p>
                <ul>
                  <li>Completed comprehensive courses in web development</li>
                  <li>Built multiple projects to apply learned concepts</li>
                  <li>Participated in coding challenges and hackathons</li>
                  <li>Contributed to open-source projects on GitHub</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2>My Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <img src={eliVillasImg} alt="Eli Villas" className="project-image" />
              <h3>Eli Villas — <span className="project-status">Live</span></h3>
              <p className="project-type">Real Estate Website</p>
              <p>
                A comprehensive website for showcasing luxury villas. Features include property listings,
                image galleries, contact forms, and responsive design optimized for all devices.
              </p>
              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
              <div className="project-links">
                <a href="#projects" className="project-link">View Live</a>
              </div>
            </div>
            <div className="project-card">
              <img src={syArYoImg} alt="Sy Ar Yo" className="project-image" />
              <h3>Sy Ar Yo — <span className="project-status">Live</span></h3>
              <p className="project-type">Construction Company Website</p>
              <p>
                Professional website for a construction company featuring service descriptions,
                project portfolios, team information, and client testimonials. Built with WordPress
                for easy content management.
              </p>
              <div className="project-tech">
                <span>WordPress</span>
                <span>CSS</span>
              </div>
              <div className="project-links">
                <a href="#projects" className="project-link">View Live</a>
              </div>
            </div>
            <div className="project-card">
              <img src={yesEducationImg} alt="Yes Education" className="project-image" />
              <h3>Yes Education — <span className="project-status">Live & Sold</span></h3>
              <p className="project-type">Educational Website</p>
              <p>
                Informative website about a school, including course information, faculty profiles,
                admission details, and news updates. This project is live on the web and has already been sold.
              </p>
              <div className="project-tech">
                <span>WordPress</span>
              </div>
              <div className="project-links">
                <a href="#projects" className="project-link">View Live</a>
              </div>
            </div>
            <div className="project-card">
              <img src={dentalGlossaryImg} alt="Dental Glossary" className="project-image" />
              <h3>Dental Glossary — <span className="project-status">Online</span></h3>
              <p className="project-type">Educational Tool</p>
              <p>
                Interactive JavaScript application providing definitions and explanations of dental
                terminology. Features search functionality, categorization, and user-friendly interface
                designed for dentists and dental students.
              </p>
              <div className="project-tech">
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
              <div className="project-links">
                <a href="#projects" className="project-link">View Live</a>
              </div>
            </div>
            <div className="project-card">
              <img src={devcollabImg} alt="DevCollab" className="project-image" />
              <h3>DevCollab — <span className="project-status">GitHub Project</span></h3>
              <p className="project-type">Collaborative Development Platform</p>
              <p>
                Team project developed on GitHub with friends. A platform for developers to collaborate
                on projects, share code snippets, and manage development workflows. Includes features
                like real-time collaboration and project tracking.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>Socket.io</span>
              </div>
              <div className="project-links">
                <a href="#projects" className="project-link">View Live</a>
                <a href="https://github.com/yourusername/devcollab" className="project-link">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills & Technologies</h2>
          <div className="skills-content">
            <div className="skills-category">
              <h3>Front-end</h3>
              <div className="skill-tags">
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">JavaScript (ES6+)</span>
                <span className="skill-tag">React</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>Back-end</h3>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>CMS & Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">WordPress</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">npm</span>
                <span className="skill-tag">VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p>I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!</p>
              <div className="contact-details">
                <p><strong>Email:</strong> etnikisufi001@gmail.com</p>
                <p><strong>Phone:</strong>+383 46 666 866</p>
                <p><strong>Location:</strong> Vushtrri, Kosova</p>
              </div>
              <div className="social-links">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
            </div>
            <form className="contact-form" action="https://formsubmit.co/etnikisufi001@gmail.com" method="POST">
              <input type="hidden" name="_subject" value="New message from portfolio site" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://portfolio.etnikisufi001.com/" />
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
