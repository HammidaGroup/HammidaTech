import { useGSAP } from "@gsap/react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Header from "../components/Header";
import hamidImg from "../assets/hamidImg.webp";
import "./Home.css";
import gsap from "gsap";
import Servise from "./Servise";
import About from "./About";

const Home = () => {
  const location = useLocation();

  // References for sections
  const serviceRef = useRef(null);
  const aboutRef = useRef(null);
  const topRef = useRef(null);

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
    } else if (location.pathname === "/" && topRef.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Header />
      <div ref={topRef} className="main-div">
        <div className="left-div">
          <h1>
            👋 Hi, I’m <span className="highlight">Mohammad Hamid</span>
          </h1>
          <h2>
            Founder of <span className="highlight">HammidaTech</span> | Web Developer
          </h2>
          <p>
            I help businesses build <strong>fast, modern, and scalable websites</strong> that
            drive real growth. As the founder of <strong>HammidaTech</strong> — a part of{" "}
            <strong>Hammida Group</strong> — my focus is on <strong>clean code</strong>,{" "}
            <strong>smooth design</strong>, and <strong>high performance</strong> to deliver
            impactful digital experiences.
          </p>
          <p>
            From personal portfolios to advanced web applications, I turn ideas into
            fully functional digital realities.
          </p>

          <div className="tech-info">
            <p>
              <strong>💻 Tech Stack:</strong> HTML, CSS, JavaScript, Node.js, Express, MongoDB
            </p>
            <p>
              <strong>🌍 Based in:</strong> Mumbai, India
            </p>
          </div>
        </div>

        <div className="right-div">
          <div className="img-bckg">
            <img src={hamidImg} alt="hamid img" />
          </div>
          <strong>Owner : </strong>
          <p>Md Hamid</p>
        </div>
      </div>

      {/* Service Section */}
      <div ref={serviceRef} className="section-wrapper">
        <Servise />
      </div>

      {/* About Section */}
      <div ref={aboutRef} className="section-wrapper">
        <About />
      </div>

      {/* Just to sync with route */}
      <Routes>
        <Route path="/service" element={<></>} />
        <Route path="/about" element={<></>} />
      </Routes>
    </>
  );
};

export default Home;
