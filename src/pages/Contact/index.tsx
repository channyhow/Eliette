import { motion } from 'framer-motion';
import ContactForm from '../../components/ContactForm';
import './styles.scss';

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="contact"
    >
      {' '}

      {/* <h3 className="contact__title">contact</h3> */}
      {/* <p>
        I love connecting with people in English, en français, 写中文也行.
      </p> */}
      {/* <div className="contact__form"> */}
      <ContactForm />
      {/* </div> */}
    </motion.div>
  );
}

export default Contact;
