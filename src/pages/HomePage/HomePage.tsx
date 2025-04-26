import { FC, useState } from 'react';
import { Box, Button } from '@mui/material';
import PBDialog from '../../components/common/forms/PBDialog/PBDialog.lazy.tsx';

const HomePage: FC = () => {
  const [showSimpleDialog, setShowSimpleDialog] = useState(false);

  const onSimpleDialogClose = () => {
    setShowSimpleDialog(false);
  };

  const onDialogSave = () => {
    console.log('Save clicked');
  };

  const onDialogRemove = () => {
    console.log('Remove clicked');
  };

  return (
    <Box className={'content'}>
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Button
        variant={'contained'}
        color={'primary'}
        onClick={() => setShowSimpleDialog(true)}
      >
        Show Simple Dialog
      </Button>
      {showSimpleDialog && (
        <PBDialog
          onSave={onDialogSave}
          open={showSimpleDialog}
          onClose={onSimpleDialogClose}
          title={'Add'}
          onRemove={onDialogRemove}
        ></PBDialog>
      )}
    </Box>
  );
};

export default HomePage;
