import React from 'react';
import monsteraLeafSvg from '../../../assets/monstera_channy-03.svg';

interface MonsteraProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

const defaultProps: MonsteraProps = {
  className: '', // Provide a default value for className
  width: 24, // Provide a default value for width
  height: 24, // Provide a default value for height
};

function Monstera({ className, width, height }: MonsteraProps) {
  return (
    <svg role="img" className={className} width={width} height={height} viewBox="0 0 24 24">
      <title>Monstera</title>
      <image href={monsteraLeafSvg} width="24" height="24" />
    </svg>
  );
}

Monstera.defaultProps = defaultProps;

export default Monstera;
