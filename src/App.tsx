import './app.scss';
import {
  BrowserRouter, Route, Routes,

} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Error from './pages/404';
import Maintenance from './pages/maintenance';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <TopNav />
        <section className="app__routes">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/home" element={<HomePage />} /> */}
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
