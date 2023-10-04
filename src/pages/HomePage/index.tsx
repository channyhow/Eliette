import { motion } from 'framer-motion';
import Info from './Info';
import './styles.scss';

function HomePage() {
  return (

    <div>
      {' '}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
        className="home"
      >
        <Info />
      </motion.main>

    </div>

  );
}

export default HomePage;
