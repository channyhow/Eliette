import { useMediaQuery } from '@mui/material';

// Custom hook to check if the device is mobile
const useIsMobile = () => useMediaQuery('(max-width: 1023px)');

export default { useIsMobile };
