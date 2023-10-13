import { motion } from 'framer-motion';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import Pepette from '../../assets/sticker_16.png';

function Error() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <div className="error">
        <h3>Whoops</h3>
        <p>seems like this page doesn&apos;t exist!</p>
        <p>how about going home?</p>
        <NavLink to="/">
          <img src={Pepette} alt="Pepe" className="error__pepette" />
        </NavLink>
      </div>

    </motion.main>
  );
}

export default Error;
