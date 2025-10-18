import { useGSAP } from "@gsap/react";
import Header from "../components/Header";
import { useRef } from "react";
import "./Servise.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Servise = () => {
   const sectionRef = useRef(null);
  useGSAP(()=>{
  if (!sectionRef.current) return;

    const tl = gsap.fromTo(
      sectionRef.current.querySelector(".container"),
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",   // when top of section hits 80% of viewport
          end: "top 20%",     // when top of section hits 20% of viewport
          scrub: true,
          // markers: true,   // enable while debugging
        },
      }
    );

    return () => {
      // cleanup if useGSAP supports returning cleanup; otherwise kill triggers manually
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    }
  })
  // console.log(gsap.scrollTrigger);
  
  return (
    <>
      <Header />
      
      <main className="service-page">
        <section className="container">
          <h1>Our Services</h1>
          <p>
            I help businesses build fast, modern, and scalable websites that
            drive real growth. Services tailored for startups and enterprises.
          </p>

          <ul className="services-list">
            <li>
              <strong>Web Development:</strong> Responsive sites, SPAs, React/Vite
            </li>
            <li>
              <strong>Backend & APIs:</strong> Node.js, Express, REST & GraphQL
            </li>
            <li>
              <strong>E‑commerce:</strong> Custom stores, integrations, payments
            </li>
            <li>
              <strong>Performance & SEO:</strong> Optimization, accessibility, best practices
            </li>
          </ul>

          <div className="cta">
            <a className="btn" href="/contact">Get a Quote</a>
          </div>
        </section>
      </main>
     
    </>
    
  );
};

export default Servise;
