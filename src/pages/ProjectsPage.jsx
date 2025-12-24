import React from 'react';
import "./ProjectsPage.css"
import classiq from '../assets/classiq.png';
import portfolio from '../assets/portfolio.png';
import ykgbookshop from '../assets/ykgbookshop.png';
import librarymanagement from '../assets/librarymanagement.png';
import ghjobsearch from '../assets/ghjobsearch.png';
import bookmark from '../assets/bookmark.png';
import gallery from '../assets/gallery.png';

function Projects () {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <p className="projects-paragraph">A showcase of all the projects I've worked on</p>
      <div className="projects-grid">
        <div className="project-card">
          <h3>My Portfolio</h3>
          <div className="project-image">
            <img src={portfolio} alt="logo" className="image-project"/>
          </div>
          <div className="project-description">
            <p>I built this portfolio website to showcase my skills and projects. And it's a responsive website built with React and CSS.</p>
            <a href="/" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        </div>
        <div className="project-card">
          <h3>Library Management System</h3>
          <div className="project-image">
            <img src={librarymanagement} alt="logo" className="image-project"/>
          </div>
          <div className="project-description">
            <p>This is a Library Managment System and was my first React project where I learned how to build a full-stack application with React and Node.js.</p>
            <a href="https://ykgbooks.free.nf" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        </div>
        <div className="project-card">
          <h3>ClassIQ</h3>
          <div className="project-image">
            <img src={classiq} alt="logo" className="image-project"/>
          </div>
          <div className="project-description">
            <p>ClassIQ, an educational platform designed to enhance learning experiences through interactive tools and resources.</p>
            <a href="https://classiq.free.nf" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        </div>
        <div className="project-card">
          <h3>YKG BOOKSHOP</h3>
          <div className="project-image">
            <img src={ykgbookshop} alt="logo" className="image-project"/>
          </div>
          <div className="project-description">
            <p>YKG BOOKSHOP, an online bookstore platform that offers a wide range of books with a user-friendly interface and secure payment options.</p>
            <a href="https://ykgbooks.free.nf" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        </div>
        <div className="project-card">
          <h3>Ghana Job Search</h3>
          <div className="project-image">
            <img src={ghjobsearch} alt="logo" className="image-project"/>
          </div>
          <div className="project-description">
            <p>Ghana Job Search, a platform that connects job seekers with employers in Ghana, featuring job listings, application tracking, and user profiles.</p>
            <a href="https://ghjobsearch.free.nf" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        </div>
        <div className="project-card">
          <h3>Bookmanager Manager</h3>
          <div className="project-image">
            <img src={bookmark} alt="logo" className="image-project"/>
          </div>
          <div className="project-description">
            <p>Bookmanager Manager, a comprehensive tool for managing book inventories, sales, and customer data efficiently.</p>
            <a href="https://ghjobsearch.free.nf" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        </div>
        <div className="project-card">
          <h3>Modern Art Gallery</h3>
          <div className="project-image">
            <img src={gallery} alt="logo" className="image-project"/>
          </div>
          <div className="project-description">
            <p>Modern Art Gallery, a virtual space showcasing contemporary artworks with interactive features and artist profiles.</p>
            <a href="https://ghjobsearch.free.nf" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;