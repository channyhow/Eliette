import './app.scss';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
// import { useEffect, useState } from 'react';
import IntroPage from './pages/IntroPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Error from './pages/404';
import Maintenance from './pages/maintenance';
import Copyright from './components/Copyright';
import Navigation from './components/Navigation';

function App() {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="app">
      <BrowserRouter>
        <section className="app__header">
          <Header />
          <Navigation />
          <Footer />
        </section>
        <section className="app__body">
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
          <Copyright />
        </section>
      </BrowserRouter>
      {/* {isMobile && scrolled && <BottomSocial />} */}
    </div>
  );
}

export default App;
