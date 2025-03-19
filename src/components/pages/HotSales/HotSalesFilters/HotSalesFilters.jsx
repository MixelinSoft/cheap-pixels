import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Typography,
} from '@mui/material';
import ModalWindow from '../../../ui/ModalWindow/ModalWindow';
import { useDispatch, useSelector } from 'react-redux';
import { hotSalesActions } from '../../../../store/slices/hotSalesSlice';
import { stores } from '../../../../data/stores';
import { getDeals } from '../../../../services/web';
import { useEffect } from 'react';

const HotSalesFilters = () => {
  // Create Dispatch
  const dispatch = useDispatch();
  // Get Stores From Store
  const filters = useSelector((state) => state.hotSales.filters);

  const handleToggleFilterStores = (storeId) => {
    dispatch(hotSalesActions.toggleStoreFilter(storeId));
  };
  // Apply Filters
  const apllyFilters = () => {
    localStorage.setItem('hot-sales-filters', JSON.stringify(filters));
    dispatch(getDeals(filters));
    dispatch(hotSalesActions.setShowFilters(false));
  };

  const showFilters = useSelector((state) => state.hotSales.showFitlers);
  const showFiltersHandler = (value) => {
    dispatch(hotSalesActions.setShowFilters(value));
  };

  return (
    <ModalWindow show={showFilters} handler={showFiltersHandler}>
      <Box>
        <Typography variant={'h5'}>Filters: </Typography>
        <Divider />
        {/* Stores Filter */}
        <Box>
          <Typography variant={'h6'}>Stores</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {Object.keys(stores).map((storeId) => (
              <FormControlLabel
                key={storeId}
                control={
                  <Checkbox
                    checked={filters.activeStores[storeId] || false}
                    onChange={() => handleToggleFilterStores(storeId)}
                  />
                }
                label={stores[storeId].name}
              />
            ))}
          </Box>
        </Box>
        <Box>
          <Button
            onClick={apllyFilters}
            variant='contained'
            color='primary'
            sx={{ marginTop: 2 }}
          >
            Apply
          </Button>
        </Box>
      </Box>
    </ModalWindow>
  );
};

export default HotSalesFilters;
