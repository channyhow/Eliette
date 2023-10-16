import './styles.scss';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Pepette from '../../assets/sticker_16.png';

function Maintenance() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <div className="maintenance">
        <h3>Oh no!</h3>
        <p>This area is still a work in progress!</p>
        <p>How about coming back later?</p>
        <NavLink to="/">
          <img src={Pepette} alt="Pepe" className="maintenance__pepette" />
        </NavLink>

      </div>
    </motion.main>
  );
}

export default Maintenance;
