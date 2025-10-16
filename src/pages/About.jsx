// ...existing code...
import Header from "../components/Header";
import hamidImg from "../assets/hamidImg.png";
import "./About.css";

const About = () => {
  return (
    <>
      <Header />
      <main className="about-page">
        <section className="container">
          <div className="profile">
            <img src={hamidImg} alt="Mohammad Hamid" />
            <div className="bio">
              <h1>About Me</h1>
              <p>
                I'm Mohammad Hamid, founder of HammidaTech. I build fast, modern,
                and scalable web apps with focus on clean code, performance and UX.
              </p>
            </div>
          </div>

          <h2>Skills</h2>
          <ul className="skills">
            <li>HTML, CSS, JavaScript</li>
            <li>React, Vite</li>
            <li>Node.js, Express, MongoDB</li>
            <li>Performance & SEO</li>
          </ul>

          <h2>Experience</h2>
          <p>
            Worked on portfolios, SPAs and production apps for startups and small
            businesses. I enjoy optimizing load times and delivering smooth UI.
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