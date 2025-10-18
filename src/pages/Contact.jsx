import Header from "../components/Header";
import "./Contact.css";
const Contact = ()=>{
  return (
    <>
      <Header/>
      
      <main className="contact-page">
        <section className="container">
          <h1>Connect Me</h1>
             

          <div className="cta">
            <a className="btn" href={`tel:7571950460`}>Watsapp message</a>
            ---OR---
            <a className="btn" href={`tel:7571950460`}>Call</a>
          </div>
        </section>
      </main>
     
    </>
    
  );
}
export default Contact;