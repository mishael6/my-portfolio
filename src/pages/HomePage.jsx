import React, { useEffect } from 'react';
import "./HomePage.css"
import mediumshot from "../assets/mediumshot.png"
import Viewproject from '../components/viewproject';
import { FaLaptop, FaMapPin, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Home ()  {
  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  }, []);
  return (
    <section className="home-section">
      <div className="home-content">
        <h2 className="home-name">Hi, I’m</h2>
        <h1 className="h1"><span className="name">MISHAEL OSMAN MENSAH</span></h1>
        <h3 className="paragraph">A Software Engineer</h3>
        <div className="view-project-button">
          <Viewproject />
        </div>
        <div className="availability">
          <div>
            <FaLaptop />
          </div>
          <div>
            <p>Available for Hire and Collaboration</p>
          </div>
        </div>
      </div>
      <div className="home-image">
        <img src={mediumshot} alt="Profile picture" className="profile-image" />
      </div>
    </section>
  );
};

export default Home;
