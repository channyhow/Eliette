import React from 'react';
import './styles.scss';
import monsteraLeafSvg from '../../../assets/monstera icons-02.svg';

interface MonsteraProps {
  className: string; // Make className prop optional
}

function Monstera({ className = '' }: MonsteraProps) {
  return (
    <svg role="img" className="monstera-icon" viewBox="0 0 24 24">
      <title>Monstera</title>
      <image href={monsteraLeafSvg} width="24" height="24" />
    </svg>
  );
}

export default Monstera;
