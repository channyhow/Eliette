import ContactForm from './ContactForm';
import './styles.scss';

function Contact() {
  return (
    <div className="contact">
      <h2 className="contact__title">contact</h2>
      <div className="contact__form">
        <ContactForm />
      </div>

    </div>
  );
}

export default Contact;
