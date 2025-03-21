import { AppBar, Box, Card, IconButton, Toolbar } from '@mui/material';
import filtersIcon from '../../../../assets/icons/filters.svg';
import { useDispatch } from 'react-redux';
import { hotSalesActions } from '../../../../store/slices/hotSalesSlice';
import HotSalesPagination from '../HotSalesPagination/HotSalesPagination';

const HotSalesPanel = () => {
  // Create Dispatch
  const dispatch = useDispatch();
  // Show Filters Handler
  const showFiltersHandler = () => {
    dispatch(hotSalesActions.setShowFilters(true));
  };
  return (
    <Card
      sx={{
        position: 'absolute',
        top: '72px',
        height: '64px',
        left: '16px',
        right: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <HotSalesPagination />
      <IconButton onClick={showFiltersHandler}>
        <img src={filtersIcon} alt='Filters Icon' width='32px' height='32px' />
      </IconButton>
    </Card>
  );
};

export default HotSalesPanel;
