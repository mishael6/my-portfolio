import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const revealTargets = [
  ".section-heading",
  ".about-hero > div",
  ".skills-marquee",
  ".about-project-list li",
  ".timeline-item",
  ".featured",
  ".project-card",
  ".contact-card",
  ".social-links",
  ".message-form-container",
].join(", ");

function PageTransition({ children }) {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!ref.current || reduced) return;
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" }
      );

      if (!reduced) {
        const elements = ref.current.querySelectorAll(revealTargets);
        elements.forEach((element, index) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 26, filter: "blur(5px)" },
            {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.72,
              delay: index < 3 ? index * 0.06 : 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            }
          );
        });
        ScrollTrigger.refresh();
      }
    },
    { scope: ref, dependencies: [reduced] }
  );

  return (
    <div ref={ref} className="page-transition">
      {children}
    </div>
  );
}

export default PageTransition;
