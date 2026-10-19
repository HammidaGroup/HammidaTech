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
          <h1>Our Digital Services</h1>
          <p>
            HammidaTech, led by Md Hamid, builds growth-ready digital systems for modern businesses, from polished websites and business apps to strategy-driven marketing execution.
          </p>

          <ul className="services-list">
            <li>Custom website design and development</li>
            <li>Responsive web application development</li>
            <li>Mobile-friendly landing pages and funnels</li>
            <li>Brand identity and UI/UX design systems</li>
            <li>SEO and local search optimization</li>
            <li>Google Business Profile setup and management</li>
            <li>Social media content and campaign design</li>
            <li>Performance marketing and lead generation</li>
            <li>Election campaign management</li>
            <li>Business automation and conversion strategy</li>
          </ul>

          <div className="cta">
            <a className="btn" href="/contact">Request a Proposal</a>
          </div>
        </section>
      </main>
     
    </>
    
  );
};

export default Servise;
