import { Box } from '@mui/material';
// Import Icons
import steam from '../../assets/icons/stores/steam.svg';
import gog from '../../assets/icons/stores/gog.svg';
import egs from '../../assets/icons/stores/egs.svg';

const StoreIcon = ({ store, link }) => {
  const icons = {
    1: steam,
    7: gog,
    25: egs,
  };
  return (
    <Box
      sx={{
        padding: '2px',
        borderRadius: '4px',
        backgroundColor: 'secondary.main',
        boxShadow: '2px 4px 4px rgb(126, 0, 0)',
      }}
    >
      <img src={icons[store]} alt='Store Icon' width='32px' height='32px' />
    </Box>
  );
};

export default StoreIcon;
