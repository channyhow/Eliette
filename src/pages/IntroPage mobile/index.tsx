import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';
import { Button } from '@mui/material';

function IntroPageMobile() {
  const navigate = useNavigate();
  const [showDot, setShowDot] = useState(false); // State to manage the dot

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDot(true); // Show the dot after 2 seconds
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const redirectToHomepage = () => {
    navigate('/home'); // Redirect to the homepage
  };

  return (
    <div className="intro">
      <h2 className={`intro__name ${showDot ? 'intro__name--fade-out' : ''}`}>
        bonjour
        {showDot && '.'}
      </h2>
      {showDot && ( // Render the button conditionally
        <div>
          <Button
            className="intro__button"
            onClick={redirectToHomepage}
            style={{ margin: '1em', backgroundColor: 'rgb(255, 255, 255, 0.3)', color: 'white',fontSize: '1em', padding:'0.5em' }}
          >
            come in!
          </Button>
        </div>
      )}
    </div>
  );
}

export default IntroPageMobile;
