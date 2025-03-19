import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SaleCard from './SaleCard/SaleCard';
import { Box } from '@mui/material';
import HotSalesPanel from './HotSalesPanel/HotSalesPanel';
import { getDeals } from '../../../services/web';

const HotSales = () => {
  // Create Dispatch
  const dispatch = useDispatch();
  // Get Deals From Store
  const deals = useSelector((state) => state.hotSales.bestDeals);

  useEffect(() => {
    console.log('getGames');
    dispatch(getDeals());
  }, [dispatch]);
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <HotSalesPanel />
      <Box
        sx={{
          marginTop: '80px',
          paddingRight: '8px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2,
          overflowY: 'auto',
          flexGrow: 1,
        }}
      >
        {deals.length > 0 &&
          deals.map((deal) => <SaleCard game={deal} key={deal.dealID} />)}
      </Box>
    </Box>
  );
};

export default HotSales;
