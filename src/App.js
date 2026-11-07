import './App.css';
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import eliVillasImg from './assets/images/Eli.png';
import syArYoImg from './assets/images/Sy-Ar.png';
import yesEducationImg from './assets/images/Yes.png';
import dentalGlossaryImg from './assets/images/Dental.png';
import devcollabImg from './assets/images/Dev.png';

const projects = [
  {
    title: 'Yes Education', image: yesEducationImg, type: 'Educational Website', status: 'Live & Sold',
    description: 'An information-rich education platform covering courses, faculty, admissions, and the latest school updates.',
    tech: ['WordPress'], url: 'https://isi-al.com/'
  },
  {
    title: 'Sy Ar Yo', image: syArYoImg, type: 'Construction Company Website', status: 'Live',
    description: 'A professional company website presenting services, portfolio work, team details, and customer testimonials.',
    tech: ['WordPress', 'CSS'], url: 'https://dev-sy-ar-oy.pantheonsite.io/'
  },
  {
    title: 'Eli Villas', image: eliVillasImg, type: 'Real Estate Website', status: 'Live',
    description: 'A polished luxury villa showcase with property listings, immersive galleries, contact flows, and responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript'], url: 'https://dev-elivillas.pantheonsite.io/'
  },
  {
    title: 'Dental Glossary', image: dentalGlossaryImg, type: 'Educational Tool', status: 'Online',
    description: 'A searchable JavaScript glossary that makes dental terminology clear for students and professionals.',
    tech: ['JavaScript', 'HTML', 'CSS'], url: '#projects'
  },
  {
    title: 'DevCollab', image: devcollabImg, type: 'Developer Collaboration Platform', status: 'GitHub Project',
    description: 'A collaborative workspace concept for sharing code, tracking projects, and connecting development teams.',
    tech: ['React', 'Node.js', 'Socket.io'], url: '#projects', github: 'https://github.com/yourusername/devcollab'
  }
];

const skillGroups = [
  { label: 'Frontend', skills: ['HTML5', 'CSS3', 'JavaScript', 'React'] },
  { label: 'Backend', skills: ['Node.js', 'REST APIs', 'Express'] },
  { label: 'CMS & Tools', skills: ['WordPress', 'Git', 'npm', 'VS Code'] }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const contactFormRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setFormStatus(null);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFormStatus({ type: "error", message: "Email service is not configured yet. Please add the EmailJS environment variables." });
      setIsSending(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, contactFormRef.current, { publicKey });
      contactFormRef.current.reset();
      setFormStatus({ type: "success", message: "Thanks! Your message has been sent successfully." });
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      setFormStatus({ type: "error", message: "Sorry, your message could not be sent. Please try again." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="portfolio">
      <nav className="navbar" aria-label="Main navigation">
        <div className="container nav-container">
          <a className="logo" href="#home" aria-label="Etnik Isufi home"><span>EI</span></a>
          <button
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          ><span /><span /><span /></button>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <header id="home" className="hero">
          <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="status-badge"><span /> Available for work</div>
              <p className="eyebrow">Hello, I’m Etnik Isufi</p>
              <h1>I build digital experiences that <span>feel effortless.</span></h1>
              <p className="hero-copy">18-year-old Front-end Developer creating fast, accessible, and memorable websites with React, modern JavaScript, and WordPress.</p>
              <div className="hero-actions">
                <a href="#projects" className="button button-primary">Explore my work <span>↗</span></a>
                <a href="#contact" className="button button-secondary">Get in touch</a>
              </div>
              <div className="hero-meta"><span>Based in Kosovo</span><span>Remote friendly</span></div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="profile-orbit orbit-one" /><div className="profile-orbit orbit-two" />
              <div className="profile-card"><span className="profile-initials">EI</span><div className="code-line"><i /><i /><i /></div></div>
              <div className="floating-chip chip-one">React</div><div className="floating-chip chip-two">WordPress</div>
            </div>
          </div>
        </header>

        <section id="about" className="section about-section reveal">
          <div className="container">
            <div className="section-heading"><p className="eyebrow">About me</p><h2>Turning ideas into thoughtful digital products.</h2></div>
            <div className="about-grid">
              <div className="about-copy">
                <p className="lead">I’m a detail-oriented developer who cares about clean code, intuitive interfaces, and the people using them.</p>
                <p>My journey began with curiosity about how websites work. Today, I combine creative problem-solving with modern web technologies to deliver reliable digital experiences for individuals and businesses.</p>
              </div>
              <div className="stats-grid">
                <div className="stat-card"><strong>5+</strong><span>Projects completed</span></div>
                <div className="stat-card"><strong>2+</strong><span>Years of experience</span></div>
                <div className="stat-card"><strong>6+</strong><span>Core technologies</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section experience-section reveal">
          <div className="container">
            <div className="section-heading"><p className="eyebrow">Journey</p><h2>Experience & education</h2></div>
            <div className="timeline">
              <article className="timeline-card">
                <span className="timeline-dot" aria-hidden="true" />
                <div className="timeline-content">
                  <p className="period">2023 — Present</p>
                  <h3>Front-end Developer</h3>
                  <p className="company">Freelance</p>
                  <p>Building responsive websites and interactive applications for clients using React, JavaScript, WordPress, HTML, and CSS.</p>
                </div>
              </article>
              <article className="timeline-card">
                <span className="timeline-dot" aria-hidden="true" />
                <div className="timeline-content">
                  <p className="period">2021 — Present</p>
                  <h3>Web Development & Education</h3>
                  <p className="company">Self-taught & online learning</p>
                  <p>Developing practical skills through real projects, coding challenges, hackathons, and continuous learning.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section reveal">
          <div className="container">
            <div className="section-heading projects-heading"><div><p className="eyebrow">Selected work</p><h2>Projects built with purpose.</h2></div><p>A selection of websites and digital products created for businesses and teams.</p></div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-media"><img src={project.image} alt={`${project.title} website preview`} /><span className="project-status">{project.status}</span></div>
                  <div className="project-body">
                    <p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p>
                    <div className="project-tech">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
                    <div className="project-links">
                      <a href={project.url} className="project-link" target={project.url.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">View live <span>↗</span></a>
                      {project.github && <a href={project.github} className="project-link secondary-link" target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section reveal">
          <div className="container">
            <div className="section-heading"><p className="eyebrow">Capabilities</p><h2>Skills & technologies</h2></div>
            <div className="skills-grid">
              {skillGroups.map((group, index) => <article className="skills-card" key={group.label}><div className="skill-number">0{index + 1}</div><h3>{group.label}</h3><div className="skill-tags">{group.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div></article>)}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="contact">
        <div className="container contact-grid">
          <div className="contact-copy"><p className="eyebrow">Start a conversation</p><h2>Have a project in mind? <span>Let’s make it happen.</span></h2><p>I’m open to freelance work, collaborations, and opportunities to build thoughtful products.</p></div>
          <form ref={contactFormRef} className="contact-form" onSubmit={handleContactSubmit}>
            <div className="form-row">
              <label>Name<input type="text" name="user_name" placeholder="Your name" autoComplete="name" required /></label>
              <label>Email<input type="email" name="user_email" placeholder="you@example.com" autoComplete="email" required /></label>
            </div>
            <label>Subject<input type="text" name="subject" placeholder="What would you like to discuss?" required /></label>
            <label>Message<textarea name="message" placeholder="Tell me about your project..." rows="5" minLength="10" required /></label>
            <button type="submit" className="button button-primary" disabled={isSending}>
              {isSending ? <><span className="button-spinner" aria-hidden="true" /> Sending...</> : <>Send message <span>↗</span></>}
            </button>
            {formStatus && (
              <div className={`form-status ${formStatus.type}`} role="status" aria-live="polite">
                {formStatus.message}
              </div>
            )}
          </form>
        </div>
        <div className="container footer-bottom"><p>© {new Date().getFullYear()} Etnik Isufi</p><div className="contact-details"><a href="mailto:etnikisufi001@gmail.com">Email</a><a href="tel:+38346666866">Phone</a><span>Vushtrri, Kosovo</span></div></div>
      </footer>
    </div>
  );
}

export default App;

