import { useState } from 'react';

export const useOpenState = (initialState = false) => {
  const [open, setOpen] = useState(initialState);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return {
    open,
    handleOpen,
    handleClose,
  };
};
