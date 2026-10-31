import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import portrait from "../assets/mishael-portrait-hero.png";
import { site } from "../data/site";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import "./HomePage.css";

function Home() {
  const pageRef = useRef(null);
  const reduced = usePrefersReducedMotion();
  useDocumentTitle("Home");

  useGSAP(() => {
    if (reduced) return;

    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .from(".hero-copy-wrap > *", { opacity: 0, y: 22, duration: 0.65, stagger: 0.09 })
      .from(".hero-glass-card", { opacity: 0, y: 18, scale: 0.94, duration: 0.55, stagger: 0.12 }, "<0.38");

    gsap.to(".hero-glass-card--availability", {
      y: -7,
      duration: 2.6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 2.7,
    });
    gsap.to(".hero-glass-card--location", {
      y: 7,
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 2.9,
    });
  }, { scope: pageRef, dependencies: [reduced] });

  return (
    <div className="page-shell home-page" ref={pageRef}>
      <section className="hero">
        <div className="hero-copy-wrap">
          <p className="availability"><span aria-hidden="true" /><span className="availability-label">Open to opportunities</span></p>
          <p className="eyebrow hero-greeting"><span>Hello, I&apos;m</span><strong>{site.shortName}</strong></p>
          <h1 className="display hero-name">I make ideas work.</h1>
          <p className="hero-role">Software engineer <span>·</span> Kumasi, Ghana</p>
          <p className="hero-copy muted">I build thoughtful web and mobile experiences for everyday life.</p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">View my work <FaArrowRight aria-hidden="true" /></Link>
            <Link to="/contact" className="btn btn-ghost">Say hello</Link>
          </div>
          <div className="hero-socials" aria-label="Social links">
            <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href={site.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href={site.socials.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>
        <div className="portrait-frame">
          <span className="hero-backdrop-type" aria-hidden="true">DEV<br />SIX</span>
          <img src={portrait} alt={`${site.name}, software engineer`} className="portrait" />
          <div className="hero-glass-card hero-glass-card--availability"><span className="glass-status" /> Open to connect</div>
          <div className="hero-glass-card hero-glass-card--location"><FaMapMarkerAlt aria-hidden="true" /><span><strong>Based in</strong><small>Kumasi, Ghana</small></span></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
