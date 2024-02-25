import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';

import { useState } from 'react';
import Navigation from '../Navigation';
import MonsteraMenu from '../Monstera';
import Socials from '../Socials';

type Anchor = 'menu';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = useState({
    menu: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event
        && event.type === 'keydown'
        && ((event as React.KeyboardEvent).key === 'Tab'
          || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <SwipeableDrawer
      anchor="left"
      open={state.menu}
      onClose={toggleDrawer('menu', false)}
      onOpen={toggleDrawer('menu', true)}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end', // Center items horizontally
          justifyContent: 'space-evenly', // Center items vertically
          height: '100%',
          width: '100%',
          backgroundColor: '#1129c2 ',
          padding: '2em',
          textAlign: 'right',
        }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <h1
          style={{
            fontFamily: 'EB Garamond, serif',
            // textTransform: 'uppercase',
            color: '#EBE2E2',
            fontSize: '2em',
            padding: '1em ',
          }}
        >
          hi, i&rsquo;m channy
        </h1>
        <div style={{ display: 'flex', padding: '1em', scale: '0.8' }}>
          <Navigation color="#ece3e3" hoverColor="#C6F700" />
        </div>
        <div style={{ padding: '1em 0' }}>
          {' '}
          <Socials color="#ece3e3" hoverColor="#C6F700" />
        </div>
      </Box>
    </SwipeableDrawer>
  );

  return (
    <div style={{ padding: '1em ' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {' '}
        <Button onClick={toggleDrawer('menu', true)}>
          <MonsteraMenu />
        </Button>
        {list('menu')}
      </div>
      {' '}
    </div>
  );
}
