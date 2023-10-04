import { motion } from 'framer-motion';
import Info from './Info';
import './styles.scss';

function HomePage() {
  return (

    <div className="home">
      {' '}
      <motion.main
        className="main__container"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <Info />
      </motion.main>

    </div>

  );
}

export default HomePage;
