import { Mail, Phone } from "lucide-react";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading">
        <div className="contact-label">
          <span>03</span>
          <div></div>
          <p>CONTACT</p>
        </div>
      </div>

      <div className="contact-content">
        <h2>
          LET&apos;S BUILD
          <br />
          SOMETHING TOGETHER.
        </h2>

        <p className="contact-description">
          Have a project, idea, or opportunity in mind?
          <br />
          Let&apos;s connect and work together.
        </p>

        <div className="contact-links">
          <a href="mailto:cezannekhan04@gmail.com">
            <Mail size={18} strokeWidth={1.5} />
            <span>cezannekhan04@gmail.com</span>
          </a>

          <a href="tel:+919901245004">
            <Phone size={18} strokeWidth={1.5} />
            <span>9901245004</span>
          </a>

          <a
            href="https://www.linkedin.com/in/cezanne-khan-889626373"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="linkedin-text">in</span>
            <span>LINKEDIN</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;