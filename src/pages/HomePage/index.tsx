import { motion } from 'framer-motion';
import Info from './Info';
import './styles.scss';

function HomePage() {
  return (

    <div className="home">
      {' '}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
      >
        <Info />
      </motion.main>

    </div>

  );
}

export default HomePage;
