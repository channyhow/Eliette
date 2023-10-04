import { motion } from 'framer-motion';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import Pepette from '../../assets/sticker_16.png';

function Error() {
  return (
    <div className="error">
      {' '}
      <motion.main
        className="main__container"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <h1>Whoops</h1>
        {' '}
        <NavLink to="/home">
          <img src={Pepette} alt="Pepe" className="pepette" />
          {' '}
        </NavLink>
        <p>seems like this page doesn&apos;t exist!</p>
        <p>how about going home?</p>
      </motion.main>
    </div>
  );
}

export default Error;
