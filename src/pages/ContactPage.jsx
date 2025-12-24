import React from 'react';
import { useRef } from 'react';
import "./ContactPage.css"
import { FaMapPin, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_0hyyxdt", 
      "template_gyhweyf",
      form.current,
      "lBeGzX3vO8OzdwEwA"
    )
      .then(
        (result) => {
          alert("Email sent successfully!");
          form.current.reset();
      },
      (error) => {
          alert("Failed to send email. Please try again.");
          console.log(error.text);
      }
    );
  }

  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2>Contact Info</h2>
        <a className="contact-paragraph">
          <FaEnvelope /> 
          <div className="text">
            <p>Email</p>
            <p>mishosmanmensah660@gmail.com</p>
          </div>
        </a>
        <a className="contact-paragraph">
          <FaPhone /> 
          <div className="text">
            <p>Phone</p>
            <p>+233 53 264 6676</p>
          </div>
        </a>
        <a className="contact-paragraph">
          <FaMapPin />
          <div className="text">
            <p>Location</p>
            <p>Kumasi, Ghana</p>
          </div>
        </a>
        
        <div className="social-links">
          <a href="https://www.linkedin.com/in/mishael-mensah-osman-17a194332" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/mishael6" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://instagram.com/mishael.six" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://wa.me/233532646676" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <div className="message-form-container">
        <h2>Message Me</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="user_name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="user_email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
