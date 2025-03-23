import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  MenuItem,
  Select,
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
    dispatch(getDeals(tempFilters, 1));
    dispatch(hotSalesActions.setCurrentPage(1));
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
      {tempFilters && (
        <Box>
          <Typography variant={'h5'}>Filters: </Typography>
          <Divider />
          {/* Stores Filter */}
          <Box sx={{ marginTop: 1, marginBottom: 1 }}>
            <Typography variant={'h6'}>Stores</Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                gap: 0.5,
              }}
            >
              {Object.keys(stores).map((storeId) => (
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
          <Divider />
          {/* Items On Page */}
          <Box sx={{ marginTop: 1, marginBottom: 1 }}>
            <Typography variant={'h6'}>Games On Page:</Typography>

            <Select
              size='small'
              value={tempFilters.pageSize}
              onChange={(e) =>
                setTempFilters((prev) => ({
                  ...prev,
                  pageSize: e.target.value,
                }))
              }
            >
              <MenuItem value='10'>10</MenuItem>
              <MenuItem value='15'>15</MenuItem>
              <MenuItem value='20'>20</MenuItem>
              <MenuItem value='25'>25</MenuItem>
              <MenuItem value='40'>40</MenuItem>
              <MenuItem value='60'>60</MenuItem>
            </Select>
          </Box>
          <Divider />
          {/* Sorting */}
          <Box sx={{ marginTop: 1, marginBottom: 1 }}>
            <Typography variant={'h6'}>Sorting:</Typography>
          </Box>
          <Divider />
          {/* Buttons */}
          <Box
            sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}
          >
            <Button
              variant='outlined'
              onClick={() => showFiltersHandler(false)}
            >
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
      )}
    </ModalWindow>
  );
};

export default HotSalesFilters;
