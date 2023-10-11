import './app.scss';
import {
  BrowserRouter, Route, Routes,

} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import IntroPage from './pages/IntroPage';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Error from './pages/404';
import Maintenance from './pages/maintenance';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';

function App() {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="app">
      <BrowserRouter>
        <TopNav />
        <section className="app__routes">
          <Routes>
            {/* Render IntroPage only on desktop */}
            {isDesktop && <Route path="/" element={<IntroPage />} />}
            {isMobile && <Route path="/" element={<IntroPage />} />}

            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Maintenance />} />
            <Route path="/exp" element={<Experience />} />
            <Route path="*" element={<Error />} />
          </Routes>
          {' '}
          <BottomNav />
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
