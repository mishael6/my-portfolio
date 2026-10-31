import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { site } from "../data/site";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import "./Footer.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Footer() {
  const footerRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(() => {
    if (reduced) return;
    gsap.fromTo(
      ".footer-inner > *",
      { autoAlpha: 0, y: 18 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".site-footer", start: "top 92%", once: true },
      }
    );
  }, { scope: footerRef, dependencies: [reduced] });

  return (
    <footer className="site-footer" ref={footerRef}>
      <div className="footer-inner">
        <div>
          <p className="footer-name">{site.name}</p>
          <a className="footer-mail" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
        <div className="footer-links">
          <Link to="/projects">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <a href={site.socials.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} {site.shortName}</p>
      </div>
    </footer>
  );
}

export default Footer;
