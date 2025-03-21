import { Box, Typography } from '@mui/material';
import logo from '../../../assets/images/logoCircle.webp';

const LoadingOverlay = ({ show }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: '64px',
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        cursor: 'wait',
        opacity: show ? 1 : 0,
        visibility: show ? 'visible' : 'hidden',
        transition: 'opacity 0.3s ease, visibility 0.5s ease',
        zIndex: 100,
      }}
      W
    >
      <Box
        sx={{
          animation: 'spin 1.5s ease infinite',
        }}
      >
        <img src={logo} alt='Logo' width='256' height='256' />
      </Box>
      <Typography
        sx={{ marginTop: 2, fontSize: '32px' }}
        color={'text.primary'}
      >
        Loading...
      </Typography>
    </Box>
  );
};

export default LoadingOverlay;
