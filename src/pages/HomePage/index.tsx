import { motion } from 'framer-motion';
import Info from './Info';
import './styles.scss';
import Navigation from '../../components/Navigation';
import Copyright from '../../components/Copyright';

function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      className="home"
    >
      <div className="homepage">
        <div className="homepage__left-section">
          <Info />
        </div>
        <div className="homepage__right-section" />
        <Navigation />
      </div>
    </motion.main>
  );
}

export default HomePage;
