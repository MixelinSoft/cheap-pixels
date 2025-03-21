import { Box, Pagination, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getDeals } from '../../../../services/web';
import { hotSalesActions } from '../../../../store/slices/hotSalesSlice';

const HotSalesPagination = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.hotSales.totalPages);
  const page = useSelector((state) => state.hotSales.currentPage);
  const filters = useSelector((state) => state.hotSales.filters);

  const changeHandler = (event, value) => {
    dispatch(hotSalesActions.setCurrentPage(value));
    dispatch(getDeals(filters, value));
  };
  return (
    <Box>
      {count > 1 && (
        <Pagination
          page={page}
          onChange={changeHandler}
          count={count}
          size='small'
        />
      )}
    </Box>
  );
};

export default HotSalesPagination;
