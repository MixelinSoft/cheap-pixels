import { Box, Typography } from '@mui/material';
import { stores } from '../../../data/stores';

const StoreIcon = ({ store, title }) => {
  return (
    <Box
      sx={{
        padding: '4px',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: 'secondary.dark',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'secondary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px',
          borderRadius: '4px',
        }}
      >
        <img
          src={stores[store].icon}
          alt='Store Icon'
          width='40px'
          height='40px'
        />
      </Box>
      {title && (
        <Typography
          sx={{
            marginLeft: '6px',
            color: 'text.primary',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          {stores[store].name}
        </Typography>
      )}
    </Box>
  );
};

export default StoreIcon;
