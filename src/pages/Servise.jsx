import Header from "../components/Header";

import "./Servise.css";

const Servise = () => {
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
