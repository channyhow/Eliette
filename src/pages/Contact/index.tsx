import ContactForm from './ContactForm';
import './styles.scss';

function Contact() {
  return (
    <div className="contact">
      <h2 className="contact__title">contact</h2>
      <p>
        I love connecting with people so don&apos;t hesitate
        and leave me a message in English, en français, 写中文也行.
      </p>
      <div className="contact__form">
        <ContactForm />
      </div>

    </div>
  );
}

export default Contact;
