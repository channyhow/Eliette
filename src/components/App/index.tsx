import './styles.scss';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import IntroPage from '../../pages/IntroPage';
import HomePage from '../../pages/HomePage';
import Header from '../Header';
import Footer from '../Footer';
import Contact from '../../pages/Contact';
// import Projects from '../../pages/Projects';
import Experience from '../../pages/Experience';
import BottomSocial from '../Bottom social bar';
import Error from '../../pages/404';
import Maintenance from '../../pages/maintenance';
import Copyright from '../Copyright';

function App() {
  // Define a media query for desktop screens
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="app">
      <BrowserRouter>
        <div className="app__border">
          <div className="app__header">
            <Header />
            <Footer />
          </div>
          <div className="app__body">
            <div className="app__route">
              <Routes>
                {/* Render IntroPage only on desktop */}
                {isDesktop && <Route path="/" element={<IntroPage />} />}
                {isMobile && <Route path="/" element={<HomePage />} />}
                <Route path="/home" element={<HomePage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Maintenance />} />
                <Route path="/exp" element={<Experience />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </div>
            <Copyright />
          </div>

        </div>
      </BrowserRouter>
      <BottomSocial />
    </div>
  );
}

export default App;
