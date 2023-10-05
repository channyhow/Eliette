import React, { useState } from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import GitHubIcon from '@mui/icons-material/GitHub';
// import InstagramIcon from '@mui/icons-material/Instagram';
import './styles.scss';

function Socials() {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const handleMouseEnter = (href: string) => {
    setHoveredIndex(href);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const socialIcons = [
    { icon: <AlternateEmailIcon />, href: 'mailto:channyhow@gmail.com', target: 'channyh_email' },
    // { icon: <InstagramIcon />, href: 'https://www.instagram.com/eliettenmissy/' ,target: 'channy_phone'},
    { icon: <GitHubIcon />, href: 'https://github.com/channyhow', target: 'channyh_github' },
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/channy-how', target: 'channyh_linkedin' },
    { icon: <SmartphoneIcon />, href: 'tel:+33788484006', target: 'channyh_phone' },
  ];

  return (
    <div className="socials">
      <ol>
        {socialIcons.map((social) => (
          <li
            key={social.href}
            style={{ color: hoveredIndex === social.href ? '#DA231B' : '#030303' }}
            onMouseEnter={() => handleMouseEnter(social.href)}
            onMouseLeave={handleMouseLeave}
          >
            <a
              className={`socials__icon ${hoveredIndex === social.href ? 'socials__icon--hovered' : ''}`}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Socials;
