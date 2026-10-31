import { useRef, useState } from "react";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapPin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { site } from "../data/site";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import "./ContactPage.css";

function Contact() {
  const form = useRef();
  const pageRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  useDocumentTitle("Contact");

  const sendEmail = (event) => {
    event.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setError("Email is not configured. Write me directly instead.");
      return;
    }

    setStatus("sending");
    setError("");

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch(() => {
        setStatus("error");
        setError("Could not send. Try email or WhatsApp.");
      });
  };

  return (
    <div className="page-shell contact-page" ref={pageRef}>
      <header className="contact-heading">
        <div>
          <p className="eyebrow"><span className="contact-heading-dot" /> Contact</p>
          <h1 className="display contact-title">Have a good<br /><span>one in mind?</span></h1>
          <p className="muted contact-intro">Tell me what you&apos;re thinking. I&apos;m open to thoughtful projects, collaborations, and conversations.</p>
        </div>
        <div className="contact-heading-note"><span className="contact-note-icon"><FaEnvelope /></span><p>Have a project<br />in mind?</p><a href={`mailto:${site.email}`}>Let&apos;s talk <FaExternalLinkAlt aria-hidden="true" /></a></div>
      </header>

      <section className="contact-section">
        <div className="contact-content">
          <div className="contact-section-label"><span>01</span><p>Find me here</p></div>
          <a className="contact-card" href={`mailto:${site.email}`}>
            <span className="contact-icon"><FaEnvelope /></span>
            <div>
              <span className="contact-label">Email</span>
              <strong>{site.email}</strong>
            </div>
            <FaExternalLinkAlt className="contact-card-arrow" aria-hidden="true" />
          </a>
          <a className="contact-card" href={site.phoneHref}>
            <span className="contact-icon"><FaPhone /></span>
            <div>
              <span className="contact-label">Phone</span>
              <strong>{site.phone}</strong>
            </div>
            <FaExternalLinkAlt className="contact-card-arrow" aria-hidden="true" />
          </a>
          <a
            className="contact-card"
            href={site.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon"><FaMapPin /></span>
            <div>
              <span className="contact-label">Location</span>
              <strong>{site.location}</strong>
            </div>
            <FaExternalLinkAlt className="contact-card-arrow" aria-hidden="true" />
          </a>

          <div className="social-area">
            <p>Around the web</p>
            <div className="social-links">
              <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href={site.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href={site.socials.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="message-form-container">
          <div className="form-heading"><div><p className="eyebrow">02 · Say hello</p><h2>Send a note</h2></div><span className="form-heading-arrow"><FaArrowRight /></span></div>
          <p className="form-intro">A few details are all I need to get the conversation started.</p>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name="user_name" placeholder="Jane Smith" required />
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="user_email" placeholder="jane@company.com" required />
            <label htmlFor="message">What would you like to discuss?</label>
            <textarea id="message" name="message" rows="4" placeholder="Tell me a little about it…" required />
            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : <>Send message <FaArrowRight aria-hidden="true" /></>}
            </button>
            {status === "success" ? (
              <p className="form-status success" role="status">
                Sent. I’ll get back to you.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="form-status error" role="alert">
                {error}
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
