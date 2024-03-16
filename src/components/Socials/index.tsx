import React from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MonsteraBlue from '../Icons/MonsteraBlue';
import MonsteraNude from '../Icons/MonsteraNude';
// Import your Monstera icons and any other necessary components

// interface SocialIcon {
//   icon: JSX.Element;
//   href: string;
//   label: string;
// }

interface SocialsProps {
  isMobile: boolean;
  handleMouseEnter: (href: string) => void;
  handleMouseLeave: () => void;
  hoveredIndex: string | null;
  hoverColor: string;
  color: string;
  backgroundColor: string;
}

function Socials({
  isMobile, handleMouseEnter, handleMouseLeave, hoveredIndex, hoverColor, color, backgroundColor,
}: SocialsProps) {
  const socialIcons = [
    { icon: <AlternateEmailIcon />, href: 'mailto:channyhow@gmail.com', label: 'Email' },
    { icon: <GitHubIcon />, href: 'https://github.com/channyhow', label: 'GitHub' },
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/channy-how', label: 'LinkedIn' },
    { icon: <SmartphoneIcon />, href: 'tel:+33788484006', label: 'Phone' },
    {
      icon: isMobile ? <MonsteraNude width="24" height="24" /> : <MonsteraBlue width="24" height="24" />,
      href: '/contact',
      label: 'Contact',
    },
  ];

  return (
    <ul className="socials">
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
          <a
            href={social.href}
            target={social.href.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Socials;
