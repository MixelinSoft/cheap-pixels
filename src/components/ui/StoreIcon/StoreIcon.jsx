import { Box, Typography } from '@mui/material';
import { stores } from '../../../data/stores';

const StoreIcon = ({ store, title }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px',
          borderRadius: '4px',
          width: '36px',
          height: '36px',
          backgroundColor: 'primary.main',
        }}
      >
        <img
          src={stores[store].icon}
          alt='Store Icon'
          width='32px'
          height='32px'
        />
      </Box>
      {title && (
        <Typography
          sx={{
            marginLeft: '4px',
            color: 'text.primary',
            fontSize: '14px',
            textWrap: 'nowrap',
          }}
        >
          {stores[store].name}
        </Typography>
      )}
    </Box>
  );
};

export default StoreIcon;
