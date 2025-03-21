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
import { useEffect, useState } from 'react';

const HotSalesFilters = () => {
  // Create Dispatch
  const dispatch = useDispatch();
  // Create Temp Filters State
  const [tempFilters, setTempFilters] = useState(null);
  // Get Show Filters Status From Store
  const showFilters = useSelector((state) => state.hotSales.showFitlers);
  // Get Stores From Store
  const filters = useSelector((state) => state.hotSales.filters);
  // Toggle Temp Filters
  const handleToggleFilterStores = (storeId) => {
    setTempFilters({
      ...tempFilters,
      activeStores: {
        ...tempFilters.activeStores,
        [storeId]: !tempFilters.activeStores[storeId],
      },
    });
  };
  // Apply Filters
  const applyFilters = () => {
    dispatch(hotSalesActions.setFilters(tempFilters));
    localStorage.setItem('hot-sales-filters', JSON.stringify(tempFilters));
    dispatch(getDeals(tempFilters));
    dispatch(hotSalesActions.setShowFilters(false));
  };
  // Show Filters Handler
  const showFiltersHandler = (value) => {
    dispatch(hotSalesActions.setShowFilters(value));
  };
  // Set Temp Filters
  useEffect(() => {
    if (showFilters) {
      setTempFilters(filters);
    }
  }, [showFilters, filters]);

  return (
    <ModalWindow show={showFilters} handler={showFiltersHandler}>
      <Box>
        <Typography variant={'h5'}>Filters: </Typography>
        <Divider />
        {/* Stores Filter */}
        <Box>
          <Typography variant={'h6'}>Stores</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {tempFilters &&
              Object.keys(stores).map((storeId) => (
                <FormControlLabel
                  key={storeId}
                  control={
                    <Checkbox
                      checked={tempFilters.activeStores[storeId] || false}
                      onChange={() => handleToggleFilterStores(storeId)}
                    />
                  }
                  label={stores[storeId].name}
                />
              ))}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
          <Button variant='outlined' onClick={() => showFiltersHandler(false)}>
            Cancel
          </Button>
          <Button
            sx={{ marginLeft: 2 }}
            onClick={applyFilters}
            variant='contained'
            color='primary'
          >
            Apply
          </Button>
        </Box>
      </Box>
    </ModalWindow>
  );
};

export default HotSalesFilters;
