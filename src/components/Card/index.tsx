import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import {
  JLALBANY_IMAGE_MAP, SASHAYOGAFLOW_IMAGE_MAP, JLALBANY_LOGO_MAP, SASHAYOGAFLOW_LOGO_MAP,
} from '../../utils/imageMap';
import { CardProps } from '../../types';

function Cards({ data }: CardProps) {
  const [open, setOpen] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const activeItem = data[activeItemIndex];
  const isMobile = useMediaQuery('(max-width:1023px)');

  // Decide which image and logo map to use
  const activeImageMap = activeItem?.id === '01' ? JLALBANY_IMAGE_MAP : SASHAYOGAFLOW_IMAGE_MAP;
  // Determine which logo map to use based on the active item's id
  let activeLogoMap;
  if (activeItem?.id === '01') {
    activeLogoMap = JLALBANY_LOGO_MAP.jlalbany6; // Using 'jlalbany3' specifically
  } else {
    activeLogoMap = SASHAYOGAFLOW_LOGO_MAP.sashayogaflow4; // Using 'sashayogaflow3' specifically
  }
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleNext = () => setActiveItemIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 1));
  const handlePrevious = () => setActiveItemIndex((prevIndex) => Math.max(prevIndex - 1, 0));

  return (
    <div>
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Button size="small" onClick={handlePrevious} disabled={activeItemIndex === -1}>
            <KeyboardArrowLeft />
          </Button>
          <Button size="small" onClick={handleNext} disabled={activeItemIndex === +1}>
            <KeyboardArrowRight />
          </Button>
        </div>
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: isMobile ? 'column' : 'row', scale: isMobile ? '0.9' : '',
        }}
        >
          {activeLogoMap && (
          <Link to={activeItem.url}>

            <Box
              component="img"
              sx={{
                height: '200px',
                display: 'flex',
                margin: 'auto',
                padding: isMobile ? '' : '1em',
                zIndex: '10',
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))', // Add drop shadow
                // borderRadius: '1em',
              }}
              src={activeLogoMap.src}
              alt={activeLogoMap.alt || 'Logo'}
            />
          </Link>
          )}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMobile ? 'center' : 'flex-start',
            height: '300px',
            justifyContent: 'center',
            zIndex: '10',
            filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))',
          }}
          >
            <Button onClick={handleOpen} sx={{ margin: 1 }}>
              <h3 style={{
                fontFamily: 'Antonio', color: 'white', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '5px', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))',

              }}
              >
                {activeItem.name}
              </h3>
            </Button>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap:'wrap' }}>
              {activeItem.skills.map((skill) => (
                <Box
                  key={skill}
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    // justifyContent: 'space-even',
                    // scale: '0.7',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '4px',
                    margin: '0.5em',
                    transition: 'background-color 0.3s', // Smooth transition for background color
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)', // Change to desired hover background color
                      cursor: 'pointer', // Changes the cursor to indicate the item is interactive
                    },
                    flexWrap: 'wrap',
                  }}
                >
                  <p style={{
                    opacity: '0.5',
                    padding: '0.8em',
                    fontSize: '0.5em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    fontWeight: '600',
                    letterSpacing: '2px',
                    // borderRadius: '1px solid rgba(255,255,255)',
                    filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))',

                  }}
                  >
                    {skill}
                  </p>
                </Box>

              ))}
            </div>
            <Box sx={{
              display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', scale: '0.8',
            }}
            >
              <Box sx={{ padding: '1em' }}>
                {' '}
                <h5 style={{
                  opacity: '0.8',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  fontWeight: '600',
                  letterSpacing: '3px',
                  filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))',

                }}
                >
                  {activeItem.year}
                </h5>
              </Box>
              <div style={{ padding: '1em' }}>
                <Link to={activeItem.url}>
                  <ArrowForwardIcon sx={{ opacity: '0.8', filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))' }} />
                </Link>

              </div>

            </Box>

          </Box>
          {' '}

        </div>
      </div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100vw',
          height: '100vh',
          overflowY: 'auto',
          // bgcolor: 'background.paper',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          boxShadow: 24,
          p: 4,
        }}
        >
          <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
            <CloseIcon />
          </IconButton>
          {activeItem && (
            <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
              {activeItem.image.map((img) => {
                const imageDetails = activeImageMap[img.src];
                if (!imageDetails) {
                  // console.error(`Image details not found for src: ${img.src}`);
                  return null;
                }
                return (
                  <Box
                    key={imageDetails.src}
                    sx={{
                      display: 'flex',
                    }}
                  >
                    <Link to={activeItem.url}>
                      {' '}
                      <Box
                        component="img"
                        sx={{
                          maxHeight: '80%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          margin: 'auto',
                          padding: '1em',
                        }}
                        src={imageDetails.src}
                        alt={imageDetails.alt}
                      />
                    </Link>

                  </Box>
                );
              })}
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default Cards;
