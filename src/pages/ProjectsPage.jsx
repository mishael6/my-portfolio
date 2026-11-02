import { useRef } from "react";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { featuredProject, projects } from "../data/projects";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import "./ProjectsPage.css";

function ProjectLinks({ project }) {
  return (
    <div className="project-links">
      {project.liveUrl ? (
        <a
          className="project-link-primary"
          href={project.liveUrl}
          target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
        >
          View project <FaExternalLinkAlt aria-hidden="true" />
        </a>
      ) : (
        <span className="project-coming-soon">No demo yet</span>
      )}
      {project.githubUrl ? (
        <a className="project-link-secondary" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          View code <FaExternalLinkAlt aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}

function Projects() {
  const pageRef = useRef(null);
  useDocumentTitle("Work");
  const rest = projects.filter((project) => !project.featured);

  return (
    <div className="page-shell projects-page" ref={pageRef}>
      <header className="work-heading">
        <div>
          <p className="eyebrow"><span className="work-heading-dot" /> My work</p>
          <h1 className="display projects-title">Projects I&apos;ve <span>built.</span></h1>
          <p className="muted work-intro">Websites and apps I&apos;ve made to solve real problems.</p>
        </div>
        <p className="work-count"><strong>{String(projects.length).padStart(2, "0")}</strong><span>projects<br />and counting</span></p>
      </header>

      {featuredProject ? (
        <article className="featured">
          <div className="featured-image">
            <img src={featuredProject.image} alt="" />
            <span className="featured-image-label">01 <i /> FEATURED PROJECT</span>
            <span className="featured-image-arrow" aria-hidden="true"><FaArrowRight /></span>
          </div>
          <div className="featured-copy">
            <p className="featured-overline"><span /> ANANSE · EDUCATION</p>
            <h2>{featuredProject.title}</h2>
            <p className="muted">{featuredProject.blurb}</p>
            <div className="tag-row">
              {featuredProject.stack.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <ProjectLinks project={featuredProject} />
          </div>
        </article>
      ) : null}

      <div className="work-grid-heading">
        <div><p className="eyebrow">More projects</p><h2>Other things I&apos;ve built</h2></div>
        <span>{String(rest.length).padStart(2, "0")} PROJECTS</span>
      </div>

      <div className="projects-grid">
        {rest.map((project, index) => (
          <article className="project-card" key={project.slug}>
            <div className="project-image">
              <img src={project.image} alt="" className="image-project" />
              <span className="project-index">{String(index + 2).padStart(2, "0")}</span>
              <span className="project-image-arrow" aria-hidden="true"><FaExternalLinkAlt /></span>
            </div>
            <div className="project-body">
              <div className="project-title-row"><h3>{project.title}</h3><span className="project-title-arrow" aria-hidden="true"><FaArrowRight /></span></div>
              <p className="muted">{project.outcome}</p>
              <div className="tag-row">
                {project.stack.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <ProjectLinks project={project} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
