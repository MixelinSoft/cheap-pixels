import { AppBar, Box, Card, Toolbar } from '@mui/material';

const HotSalesPanel = () => {
  return (
    <Card
      sx={{
        position: 'absolute',
        top: '80px',
        height: '64px',
        left: '16px',
        right: '16px',
        backgroundColor: 'background.paper',
      }}
    ></Card>
  );
};

export default HotSalesPanel;
