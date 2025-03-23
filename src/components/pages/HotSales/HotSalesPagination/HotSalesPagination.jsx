import { Box, Card, Pagination, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getDeals } from '../../../../services/web';
import { hotSalesActions } from '../../../../store/slices/hotSalesSlice';

const HotSalesPagination = ({ containerRef }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.hotSales.totalPages);
  const page = useSelector((state) => state.hotSales.currentPage);
  const filters = useSelector((state) => state.hotSales.filters);

  const changeHandler = (event, value) => {
    dispatch(hotSalesActions.setCurrentPage(value));
    dispatch(getDeals(filters, value));
    containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    count > 1 && (
      <Box
        sx={{
          position: 'fixed',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Card
          sx={{
            height: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Pagination
            sx={{
              minWidth: '300px',
              display: 'flex',
              justifyContent: 'center',
            }}
            page={page}
            onChange={changeHandler}
            count={count}
            size='small'
          />
        </Card>
      </Box>
    )
  );
};

export default HotSalesPagination;
