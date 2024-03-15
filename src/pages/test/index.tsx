import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Info from './Info';
import './styles.scss';
import Header from '../../components/Header';
import Socials from '../../components/Socials';
import Navigation from '../../components/Navigation';
import Monstera from '../../components/Icons/Monstera';

function HomePage() {
  return (

    <div className="homepage">
      {' '}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
        className="home"
      >
        <div className="homepage__nav">
          <Socials />
          {/* <div className="homepage__nav-line" /> */}
          <div className="homepage__monstera">
            <NavLink
              to="/home"
            >
              <Monstera />
            </NavLink>

          </div>
        </div>

        <Header />
        <Info />
        <Navigation />
      </motion.main>

    </div>

  );
}

export default HomePage;
