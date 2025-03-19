import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SaleCard from './SaleCard/SaleCard';
import { Box } from '@mui/material';
import HotSalesPanel from './HotSalesPanel/HotSalesPanel';
import { getDeals } from '../../../services/web';
import HotSalesFilters from './HotSalesFilters/HotSalesFilters';
import { hotSalesActions } from '../../../store/slices/hotSalesSlice';

const HotSales = () => {
  // Create Dispatch
  const dispatch = useDispatch();
  // Get Deals From Store
  const deals = useSelector((state) => state.hotSales.bestDeals);
  // Get Filters From Store
  const filtersLoaded = useSelector((state) => state.hotSales.filtersLoaded);
  const filters = useSelector((state) => state.hotSales.filters);

  useEffect(() => {
    const storedFilters = localStorage.getItem('hot-sales-filters');

    if (storedFilters) {
      dispatch(hotSalesActions.setFilters(JSON.parse(storedFilters)));
    } else {
      dispatch(hotSalesActions.setFiltersLoaded(true)); // Если нет в localStorage, отмечаем, что фильтры загружены
    }
  }, [dispatch]);

  useEffect(() => {
    if (filtersLoaded) {
      dispatch(getDeals(filters));
    }
  }, [dispatch, filters, filtersLoaded]);

  return (
    <>
      <HotSalesFilters />
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
    </>
  );
};

export default HotSales;
