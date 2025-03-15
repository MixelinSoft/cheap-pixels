import { Box } from '@mui/material';

const Main = ({ children }) => {
  return <Box sx={{ minHeight: '100vh', padding: '12px' }}>{children}</Box>;
};

export default Main;
