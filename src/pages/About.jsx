// ...existing code...
import Header from "../components/Header";
import hamidImg from "../assets/hamidImg.webp";
import hammidaTechIcon from "/hammidaTechIcon.jpeg";
import "./About.css";

const About = () => {
  return (
    <>
      <Header />
      <main className="about-page">
        <section className="container">
          <div className="profile">
            <img src={hammidaTechIcon} alt="HammidaTech company icon" />
            <div className="bio">
              <h1>About HammidaTech</h1>
              <p>
                Founded by Md Hamid, HammidaTech is a premium startup agency based in Mumbai, helping ambitious brands scale through standout websites, high-quality app experiences, and smart digital growth systems.
              </p>
            </div>
          </div>

          <h2>What We Deliver</h2>
          <ul className="skills">
            <li>Web development</li>
            <li>App UX strategy</li>
            <li>SEO growth</li>
            <li>Social content</li>
            <li>Paid campaigns</li>
            <li>Lead generation</li>
            <li>Brand positioning</li>
          </ul>

          <h2>Why Choose Us</h2>
          <p>
            We combine design thinking, technical execution, and digital marketing strategy to create brand experiences that look sharp and perform with measurable business impact.
          </p>

          <div className="cta">
            <a className="btn" href="/">Back to Home</a>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;