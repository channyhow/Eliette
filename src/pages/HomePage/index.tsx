import { motion } from 'framer-motion';
import Info from './Info';
import './styles.scss';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';

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
        {' '}

        <div className="homepage__left-section">
          <Header />
          <Info />

        </div>
        <div className="homepage__right-section" />
        <Navigation />
      </div>
    </motion.main>
  );
}

export default HomePage;
