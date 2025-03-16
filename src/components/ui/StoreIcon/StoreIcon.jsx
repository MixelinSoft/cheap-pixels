import { Box, Typography } from '@mui/material';
// Import Icons
import steam from '../../../assets/icons/stores/steam.svg';
import gg from '../../../assets/icons/stores/gg.webp';
import gmg from '../../../assets/icons/stores/gmg.webp';
import gog from '../../../assets/icons/stores/gog.svg';
import ea from '../../../assets/icons/stores/ea.svg';
import humble from '../../../assets/icons/stores/humble.svg';
import uplay from '../../../assets/icons/stores/uplay.svg';
import fanatical from '../../../assets/icons/stores/fanatical.svg';

import egs from '../../../assets/icons/stores/egs.svg';

const StoreIcon = ({ store, link, title }) => {
  const stores = {
    1: {
      icon: steam,
      name: 'Steam',
    },
    2: {
      icon: gg,
      name: 'GamersGate',
    },
    3: {
      icon: gmg,
      name: 'Green Man Gaming',
    },
    7: {
      icon: gog,
      name: 'GOG Games',
    },
    8: {
      icon: ea,
      name: 'EA Play',
    },
    11: {
      icon: humble,
      name: 'Humble Bundle',
    },
    13: {
      icon: uplay,
      name: 'Uplay',
    },
    15: {
      icon: fanatical,
      name: 'Fanatical',
    },

    25: {
      icon: egs,
      name: 'Epic Games Store',
    },
  };

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
          width='32px'
          height='32px'
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
