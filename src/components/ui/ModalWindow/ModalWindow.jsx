import { Box, Card, Dialog } from '@mui/material';

const ModalWindow = ({ children, show, handler }) => {
  const closeHandler = () => {
    handler(false);
  };
  return (
    <Dialog fullWidth open={show} onClose={closeHandler} PaperComponent={Card}>
      {children}
    </Dialog>
  );
};

export default ModalWindow;
