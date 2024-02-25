import React, { useState, useEffect } from 'react';
import './styles.scss';

function MouseLight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: { pageX: any; pageY: any; }) => {
      setPosition({ x: e.pageX, y: e.pageY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="light-effect"
      style={{
        left: `${position.x - 75}px`, // Adjust based on the size of the light effect
        top: `${position.y - 75}px`,
        display: isVisible ? 'block' : 'none',
      }}
    />
  );
}

export default MouseLight;
