import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import './styles.scss';

function Contact() {
  return (
    <div className="contact">
      {' '}
      <motion.main
        className="main__container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
      >
        <h2 className="contact__title">contact</h2>
        <p>
          I love connecting with people so don&apos;t hesitate
          and leave me a message in English, en français, 写中文也行.
        </p>
        <div className="contact__form">
          <ContactForm />
        </div>
      </motion.main>
    </div>
  );
}

export default Contact;
