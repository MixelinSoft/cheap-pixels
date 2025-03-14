import { Box } from '@mui/material';
import Deals from './components/pages/Deals/Deals';

const App = () => {
  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Deals />
    </Box>
  );
};

export default App;
