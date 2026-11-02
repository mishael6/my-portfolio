import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiGit,
  SiVite,
  SiFigma,
} from "react-icons/si";
import mediumshot from "../assets/mishael-portrait.png";
import { site, skillGroups, timeline } from "../data/site";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import "./AboutPage.css";


const otherProjects = [
  "Cenvy",
  "GH Job Search",
  "YKG Bookshop",
  "Library Management System",
  "Art Gallery · AmaliTech",
  "Course Korrekt",
  "xyzVote",
  "La Creamy",
  "My Joy Standard School",
  "Ceema Academy",
  "TRO landing page",
  "Antwiplus",
  "Bookmanager",
  "Modern Art Gallery",
  "Portfolio",
];

const skillIcons = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  JavaScript: SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  "React Native": SiReact,
  PHP: SiPhp,
  "Node.js": SiNodedotjs,
  Python: SiPython,
  MySQL: SiMysql,
  Git: SiGit,
  Vite: SiVite,
  Figma: SiFigma,
};

const allSkills = skillGroups.flatMap((group) =>
  group.items.map((item) => ({ item, category: group.label.toLowerCase() }))
);

function About() {
  const pageRef = useRef(null);
  useDocumentTitle("About");

  return (
    <div className="page-shell about-page" ref={pageRef}>
      <div className="about-journey-doodle" aria-hidden="true">
        <svg className="about-route-line" viewBox="0 0 380 340" fill="none">
          <path d="M24 296C96 280 108 232 74 204C39 174 74 131 143 146C221 163 227 102 190 73C157 47 197 20 249 39C295 55 315 81 356 35" />
          <circle cx="24" cy="296" r="5" />
          <circle cx="143" cy="146" r="5" />
          <circle cx="249" cy="39" r="5" />
        </svg>
        <span className="about-route-pin"><FaMapMarkerAlt /></span>
        <span className="about-route-star">✦</span>
      </div>
      <header className="about-hero">
        <div>
          <p className="eyebrow">About</p>
          <h1 className="display">I build websites and apps that make life easier.</h1>
          <p className="muted about-lead">
            I&apos;m {site.name}, a software engineer at Adventle Technologies and the
            CEO of DevSix Solutions and xyzVote. I&apos;m based in {site.location}.
            I completed a Diploma in Information Technology at Kumasi Technical
            University and am now studying Computer Technology there.
          </p>
          <p className="muted about-lead">
            I&apos;m building Ananse, an education company that makes ClassIQ, StudyIQ,
            and ScoreIQ for schools. WasteXpress is another project from DevSix Solutions.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Let&apos;s build something useful
          </Link>
        </div>
        <div className="about-portrait">
          <img src={mediumshot} alt={`${site.name} portrait`} />
        </div>
      </header>

      <section>
        <div className="section-heading">
          <p className="eyebrow">Tools I use</p>
          <h2>Tools I use to build websites and apps</h2>
        </div>
        <div className="skills-marquee" role="region" aria-label="Skills and tools">
          <div className="skills-track">
            {[0, 1].map((copy) => (
              <div className="skills-set" key={copy} aria-hidden={copy === 1}>
                {allSkills.map(({ item, category }) => {
                  const SkillIcon = skillIcons[item];
                  return (
                    <span
                      className={`skill-chip skill-icon-chip skill-${category}`}
                      key={`${copy}-${item}`}
                      role={copy === 0 ? "img" : undefined}
                      aria-label={copy === 0 ? item : undefined}
                      title={copy === 0 ? item : undefined}
                    >
                      <SkillIcon aria-hidden="true" />
                      <span className="skill-label">{item}</span>
                    </span>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-projects">
        <div className="section-heading">
          <p className="eyebrow">Other projects</p>
          <h2>More projects I&apos;ve worked on</h2>
        </div>
        <ul className="about-project-list">
          {otherProjects.map((project) => <li className="tag" key={project}>{project}</li>)}
        </ul>
      </section>

      <section>
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>My work, businesses, and education</h2>
        </div>
        <ol className="timeline">
          {timeline.map((item) => (
            <li className="timeline-item" key={item.title}>
              <div className="timeline-content">
                <span className="timeline-period">{item.period}</span>
                <h3>{item.title}</h3>
                <p className="timeline-org">{item.org}</p>
                <p className="muted">{item.detail}</p>
              </div>
              <span className="journey-marker" aria-hidden="true"><FaMapMarkerAlt /></span>
            </li>
          ))}
        </ol>
      </section>

    </div>
  );
}

export default About;
