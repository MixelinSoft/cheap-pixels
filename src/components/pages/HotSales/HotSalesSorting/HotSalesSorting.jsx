import { Box, IconButton, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { hotSalesActions } from '../../../../store/slices/hotSalesSlice';
import { getDeals } from '../../../../services/web';

const HotSalesSorting = () => {
  // Create Dispatch
  const dispatch = useDispatch();
  // Get Filters From Store
  const filters = useSelector((state) => state.hotSales.filters);
  // Sorting Handler
  const sottingHandler = (event) => {
    dispatch(hotSalesActions.setSortBy(event.target.value));
    dispatch(getDeals({ ...filters, sortBy: event.target.value }, 1));
    localStorage.setItem(
      'hot-sales-filters',
      JSON.stringify({ ...filters, sortBy: event.target.value }),
    );
  };
  // Order Handler
  const orderHandler = () => {
    const order = filters.sortOrder === 0 ? 1 : 0;
    dispatch(hotSalesActions.setSortOrder(order));
    dispatch(getDeals({ ...filters, sortOrder: order }, 1));
    localStorage.setItem(
      'hot-sales-filters',
      JSON.stringify({ ...filters, sortOrder: order }),
    );
  };
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Select
        sx={{ minWidth: '96px' }}
        value={filters.sortBy}
        onChange={sottingHandler}
      >
        <MenuItem value='Savings'>Savings</MenuItem>
        <MenuItem value='Title'>Title</MenuItem>
        <MenuItem value='Price'>Price</MenuItem>
      </Select>
      <IconButton
        onClick={orderHandler}
        size='large'
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '48px',
          height: '48px',
          marginLeft: '8px',
        }}
      >
        <Box
          sx={{
            fontSize: '24px',
            marginBottom: filters.sortOrder === 0 ? '6px' : 0,
            marginRight: '6px',
            transform:
              filters.sortOrder === 0 ? 'rotate(0deg)' : 'rotate(180deg)',
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          ↓
        </Box>
        <Box sx={{ fontSize: '12px' }}>
          <Box>
            {filters.sortBy === 'Title'
              ? 'A'
              : filters.sortBy === 'Price'
              ? '0'
              : '9'}
          </Box>
          <Box>
            {filters.sortBy === 'Title'
              ? 'Z'
              : filters.sortBy === 'Price'
              ? '9'
              : '0'}
          </Box>
        </Box>
      </IconButton>
    </Box>
  );
};

export default HotSalesSorting;
