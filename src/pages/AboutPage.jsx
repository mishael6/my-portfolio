import React from 'react';
import "./AboutPage.css"
import logo from "../assets/logo.png"
import Message from '../components/sendMessage';

function About () {

  const skills = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ];

  return (
    <section className="about-section">
      <div className="about-content">
        <h1>About Me</h1>
        <div className="about-paragraph">
          <p>
            I'm a software engineer skilled in React, JavaScript, HTML, CSS, PHP, Python, and Git. I build modern web applications with a focus on clean code and seamless user experiences.
          </p>
        </div>
        
        <div className="skills-section">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="message-button">
          <Message />
        </div>
      </div>

      <div className="about-image">
        <img src={logo} alt="logo" className="profile-image" />
      </div>
    </section>
  );
};

export default About;