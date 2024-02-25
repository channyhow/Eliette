import { motion } from 'framer-motion';
import './styles.scss';
import { NavLink } from 'react-router-dom';
// import Pepette from '../../assets/sticker_16.png';

function Error() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }} // Initial state of the component
      animate={{ opacity: 1, y: 0 }} // Animation to apply
      transition={{ duration: 0.5 }} // Transition duration
      className="error"
    >
      <h3 style={{ padding: '0.5em 0' }}>Whoops</h3>
      <p>seems like this page doesn&apos;t exist!</p>
      <p>how about going home?</p>
      <NavLink to="/">
        <h4 style={{ padding: '0.5em 0', color: '#1129c2' }}>Take me back please</h4>
      </NavLink>
    </motion.div>
  );
}

export default Error;
