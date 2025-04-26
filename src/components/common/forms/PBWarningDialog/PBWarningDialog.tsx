import { FC } from 'react';
import { Dialog } from '@mui/material';

interface PBWarningDialogProps {
  title?: string;
  message: string;
}

const PBWarningDialog: FC<PBWarningDialogProps> = () => {
  return (
    <Dialog>
      <h2>Warning</h2>
      <p>Are you sure you want to proceed?</p>
    </Dialog>
  );
};

export default PBWarningDialog;
