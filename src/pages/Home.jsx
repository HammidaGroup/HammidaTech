import { useGSAP } from "@gsap/react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Header from "../components/Header";
import hamidImg from "../assets/hamidImg.webp";
import "./Home.css";
import gsap from "gsap";
import Servise from "./Servise";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  const location = useLocation();

  // References for sections
  const serviceRef = useRef(null);
  const aboutRef = useRef(null);
  const topRef = useRef(null);
  const contactRef = useRef(null);

  // GSAP animation on load
  useGSAP(() => {
    gsap.from(".left-div h1, .left-div p, .left-div h2", {
      opacity: 0,
      scale: 0,
      duration: 2,
      stagger: 0.2,
     
    });
    gsap.from(".right-div img", {
      opacity: 0,
      scale: 0,
      duration: 5,
    });
    gsap.from(".right-div .img-bckg", {
      opacity: 0,
      scale: 0,
      rotate: 360,
      duration: 2,
    });
  });

  // 🔥 Scroll effect on route change
  useEffect(() => {
    if (location.pathname === "/service" && serviceRef.current) {
      serviceRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname === "/about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }else if (location.pathname === "/contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
     else if (location.pathname === "/" && topRef.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Header />
      <div className="home-mainDiv">

      <div ref={topRef} className="main-div">
        <div className="left-div">
          <h1>
            Build your <span className="highlight">premium startup</span> brand
          </h1>
          <h2>
            HammidaTech • Web Development • App Development • Digital Marketing
          </h2>
          <p>
            HammidaTech helps ambitious startups and modern businesses launch high-converting websites, polished app experiences, and growth campaigns that drive measurable revenue.
          </p>
          <ul style={{marginTop: '1em', marginBottom: '1em'}}>
            <li>Custom website design and development</li>
            <li>Responsive web applications and dashboards</li>
            <li>Mobile app UI concepts and product experiences</li>
            <li>SEO, Google Business Profile, and content strategy</li>
            <li>Social media growth and paid ad campaigns</li>
            <li>Brand visibility and lead generation systems</li>
          </ul>
          <div className="tech-info">
            <p>
              <strong>📍 Based in:</strong> Azamgarh, India
            </p>
            <p>
              <strong>📞 WhatsApp:</strong> 7571950460
            </p>
          </div>
        </div>

        <div className="right-div">
          <div className="img-bckg">
            <img src={hamidImg} alt="digital agency showcase" />
          </div>
          <strong>Founder : MD Hamid</strong>
          <p>Tech Agency • Web • App • Marketing</p>
        </div>
      </div>

      {/* Service Section */}
      <div ref={serviceRef} className="section-wrapper">
        <Servise />
      </div>

      {/* About Section */}
      {/* contact Section */}
      <div ref={contactRef} className="section-wrapper">
        <Contact />
      </div>
      <div ref={aboutRef} className="section-wrapper">
        <About />
      </div>

      </div>
      {/* Just to sync with route */}
      <Routes>
        <Route path="/service" element={<></>} />
        <Route path="/contact" element={<></>} />
        <Route path="/about" element={<></>} />
      </Routes>
    </>
  );
};

export default Home;
