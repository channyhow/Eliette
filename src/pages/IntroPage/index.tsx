import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './styles.scss';

function IntroPage() {
  const navigate = useNavigate();
  // // appearing
  // const [fadeIn, setFadeIn] = useState(false);
  // disappearing
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // setFadeIn(true);
      // Redirect to the homepage after the fade-out animation
      setTimeout(() => {
        navigate('/home');
      }, 4000);
    }, 1000);

    // After 3 second, start the fade-out animation
    setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`intro ${fadeOut ? 'intro--fade-out' : ''}`}>
      {' '}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
      >

        <h2 className={`intro__name ${fadeOut ? 'intro__name--fade-out' : ''}`}>bonjour</h2>
        {/* {fadeIn ? (
        <h1 className={`intro__label ${fadeIn ? 'intro__label--fade-in' : ''}`}> Channy</h1>
      ) : null} */}
      </motion.main>
    </div>
  );
}

export default IntroPage;
