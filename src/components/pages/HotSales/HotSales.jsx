import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SaleCard from './SaleCard/SaleCard';
import { Box, Card, Typography } from '@mui/material';
import HotSalesPanel from './HotSalesPanel/HotSalesPanel';
import { getDeals } from '../../../services/web';
import HotSalesFilters from './HotSalesFilters/HotSalesFilters';
import { hotSalesActions } from '../../../store/slices/hotSalesSlice';
import LoadingOverlay from '../../ui/LoadingOverlay/LoadingOverlay';
import HotSalesPagination from './HotSalesPagination/HotSalesPagination';

const HotSales = () => {
  // Create Dispatch
  const dispatch = useDispatch();
  // Get Deals From Store
  const deals = useSelector((state) => state.hotSales.bestDeals);
  // Get Filters From Store
  const filtersLoaded = useSelector((state) => state.hotSales.filtersLoaded);
  const filters = useSelector((state) => state.hotSales.filters);
  // Get Loading Status From Store
  const loading = useSelector((state) => state.hotSales.loading);

  const dealsRef = useRef(null);

  useEffect(() => {
    const storedFilters = localStorage.getItem('hot-sales-filters');

    if (storedFilters) {
      const parsedFilters = JSON.parse(storedFilters);

      // Объединяем фильтры из `localStorage` с актуальными `filters`
      const updatedFilters = {
        ...filters,
        ...parsedFilters,
        activeStores: {
          ...filters.activeStores,
          ...parsedFilters.activeStores,
        },
      };
      if (JSON.stringify(parsedFilters) !== JSON.stringify(updatedFilters)) {
        localStorage.setItem(
          'hot-sales-filters',
          JSON.stringify(updatedFilters),
        );
        dispatch(hotSalesActions.setFilters(updatedFilters));
      } else {
        dispatch(hotSalesActions.setFilters(parsedFilters));
      }
    } else {
      localStorage.setItem('hot-sales-filters', JSON.stringify(filters));
      dispatch(hotSalesActions.setFilters(filters));
    }

    dispatch(hotSalesActions.setFiltersLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    if (filtersLoaded) {
      dispatch(getDeals(filters, 1));
      dispatch(hotSalesActions.setCurrentPage(1));
    }
  }, [dispatch, filtersLoaded]);

  return (
    <>
      <LoadingOverlay show={loading} />
      <HotSalesFilters />
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <HotSalesPanel />
        <HotSalesPagination containerRef={dealsRef} />
        <Box
          ref={dealsRef}
          sx={{
            paddingTop: '64px',
            paddingRight: '8px',
            paddingBottom: '64px',
            display: deals.length > 0 ? 'grid' : 'block',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '16px',
            overflowY: 'auto',
            flexGrow: 1,
          }}
        >
          {deals.length > 0 ? (
            deals.map((deal) => <SaleCard game={deal} key={deal.dealID} />)
          ) : (
            <Card
              sx={{
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant='h5'
                sx={{
                  color: 'text.primary',
                }}
              >
                Games not found :(
              </Typography>
            </Card>
          )}
        </Box>
      </Box>
    </>
  );
};

export default HotSales;
