import './styles.scss';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom'; // Remove NavLink import if not needed
import Pepette from '../../assets/sticker_16.png';

function Maintenance() {
  return (
    <div className="maintenance">
      {' '}
      <motion.main
        className="main__container"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <h1>Oh no!</h1>
        {' '}
        <NavLink to="/home">
          <img src={Pepette} alt="Pepe" className="pepette" />
          {' '}
        </NavLink>
        <p>This area is still a work in progress!</p>
        <p>How about coming back later?</p>
      </motion.main>
    </div>
  );
}

export default Maintenance;
