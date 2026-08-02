import Header from "../components/Header";
import "./Contact.css";
const Contact = ()=>{
  return (
    <>
      <Header/>
      
      <main className="contact-page">
        <section className="container">
          <h1>Let’s build your next premium digital presence</h1>
          <p>Talk to Md Hamid at HammidaTech for websites, apps, SEO, content, and growth campaigns.</p>
          <div className="cta">
            <a className="btn" href="https://wa.me/7571950460" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            <span>or</span>
            <a className="btn" href="tel:7571950460">Call Now</a>
          </div>
        </section>
      </main>
     
    </>
    
  );
}
export default Contact;