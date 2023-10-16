import React, { useState } from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SocialItem } from '../../@types';
import './styles.scss';

function Socials() {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const handleMouseEnter = (href: string) => {
    setHoveredIndex(href);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const socialIcons: SocialItem[] = [
    { icon: <AlternateEmailIcon />, href: 'mailto:channyhow@gmail.com', label: 'email' },
    { icon: <GitHubIcon />, href: 'https://github.com/channyhow', label: 'github' },
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/channy-how', label: 'linkedin' },
    { icon: <SmartphoneIcon />, href: 'tel:+33788484006', label: 'phone' },
  ];

  return (
    <ol className="socials">
      {socialIcons.map((social) => (
        <li
          key={social.label}
          style={{ color: hoveredIndex === social.href ? '#DA231B' : '#030303' }}
          onMouseEnter={() => handleMouseEnter(social.href)}
          onMouseLeave={handleMouseLeave}
        >
          <a
            className={`socials__icon ${hoveredIndex === social.href ? 'socials__icon--hovered' : ''}`}
            href={social.href}
            target="_blank"
            aria-label={social.label}
            rel="noopener noreferrer"
            style={{ transform: 'scale(0.75)' }}
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ol>
  );
}

export default Socials;
