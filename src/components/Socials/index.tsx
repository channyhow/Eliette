import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import GitHubIcon from '@mui/icons-material/GitHub';
import './styles.scss';
import MonsteraNude from '../Icons/MonsteraNude';
import MonsteraBlue from '../Icons/MonsteraBlue';

function Socials({ color, hoverColor, backgroundColor }:
{ color?: string; hoverColor?: string; backgroundColor?: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const isMobile = useMediaQuery('(max-width:1023px)');

  const handleMouseEnter = (href: string) => {
    setHoveredIndex(href);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const socialIcons = [
    { icon: <AlternateEmailIcon />, href: 'mailto:channyhow@gmail.com', label: 'email' },
    { icon: <GitHubIcon />, href: 'https://github.com/channyhow', label: 'github' },
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/channy-how', label: 'linkedin' },
    { icon: <SmartphoneIcon />, href: 'tel:+33788484006', label: 'phone' },
    {
      icon: isMobile ? <MonsteraNude width="24" height="24" /> : <MonsteraBlue width="24" height="24" />,
      href: '/contact',
      label: 'contact',
    },
  ];

  return (
    <div className="socials">
      {socialIcons.map((social) => (
        <li
          key={social.href}
          style={{
            padding: '1em',
            color: hoveredIndex === social.href ? hoverColor : color,
            backgroundColor,
            transition: 'color 0.2s',
          }}
          onMouseEnter={() => handleMouseEnter(social.href)}
          onMouseLeave={handleMouseLeave}
          className="socials__icon"
        >
          <a href={social.href} target={social.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
            {social.icon}
          </a>
        </li>
      ))}
    </div>
  );
}

export default Socials;
