import { Box } from '@mui/material';

const Main = ({ children }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: '16px',
        overflowY: 'hidden',
      }}
    >
      {children}
    </Box>
  );
};

export default Main;
