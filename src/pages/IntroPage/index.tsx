import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './styles.scss';

function IntroPage() {
  const navigate = useNavigate();
  const [showDot, setShowDot] = useState(false); // State to manage the dot

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDot(true); // Show the dot after 2 seconds
    }, 2000);

    setTimeout(() => {
      navigate('/home'); // Redirect to the homepage after 4 seconds
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`intro ${showDot ? 'intro--fade-out' : ''}`}>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <h2 className={`intro__name ${showDot ? 'intro__name--fade-out' : ''}`}>
          bonjour
          {showDot && '.'}
        </h2>
      </motion.main>
    </div>
  );
}

export default IntroPage;
