import './styles.scss';
import { Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@mui/material';
import Contact from '../../pages/Contact';
import Experience from '../../pages/Experience';
import Error from '../../pages/404';

import Socials from '../Socials';
import Info from '../../pages/Info';
import Copyright from '../Copyright';
// import MouseLight from '../MouseLight';
import Top from '../Top';
import Maintenance from '../../pages/maintenance';

function App() {
  const isMobile = useMediaQuery('(max-width: 1023px)');

  return (
    <motion.div className="app">
      {!isMobile && <Socials color="#1129c2" hoverColor="#C6F700" />}

      <div className="app__inner-container">
        <Top />
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="app__routes"
        >
          <Routes>
            <Route path="/" element={<Info />} />
            <Route path="/about" element={<Maintenance />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Maintenance />} />
            <Route path="/exp" element={<Experience />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </motion.div>
      </div>

      {!isMobile && <Copyright />}
      {
  isMobile && (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '1em',
      width: '100%',
    }}
    >
      <Socials color="#ece3e3" hoverColor="#C6F700" />
    </div>
  )
}
    </motion.div>
  );
}

export default App;
