import React, { useState } from 'react';
import monsteraBlue from '../../../assets/monstera icons_MONSTERA BLUE.svg';
// import monsteraNude from '../../../assets/monstera icons_MONSTERA NUDE.svg';
import monsteraFluo from '../../../assets/monstera icons_MONSTERA HOVER.svg';
// import monsteraGreen from '../../../assets/monstera icons_MONSTERA GREEN.svg';

interface MonsteraProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

const defaultProps: MonsteraProps = {
  className: '', // Provide a default value for className
  width: 32, // Provide a default value for width
  height: 32, // Provide a default value for height
};

function MonsteraBlue({
  className, width, height,
}: MonsteraProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Determine which SVG to show
  const imageSrc = isHovered ? monsteraFluo : monsteraBlue;

  return (
    <svg
      role="img"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 32 32"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <title>Monstera</title>
      <image href={imageSrc} width="32" height="32" />
    </svg>
  );
}

MonsteraBlue.defaultProps = defaultProps;

export default MonsteraBlue;
