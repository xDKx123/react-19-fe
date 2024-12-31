import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import React from 'react';
import PBCancelButton from '../../buttons/PBCancelButton/PBCancelButton.tsx';
import PBSaveButton from '../../buttons/PBSaveButton/PBSaveButton.tsx';
import PBDeleteButton from '../../buttons/PBDeleteButton/PBDeleteButton.lazy.tsx';
import CloseIcon from '@mui/icons-material/Close';
import { useHotkeys } from 'react-hotkeys-hook';

interface PBDialogProps {
  //required
  onSave: () => void;
  onRemove?: () => void;
  open: boolean;
  onClose: () => void;

  //optional
  id?: string;
  title?: string;
  dialogContent?: React.ReactNode;
  dialogActionsLeft?: React.ReactNode;
  dialogActionsRight?: React.ReactNode;
}

const PBDialog = (props: PBDialogProps) => {
  useHotkeys('ctrl+s', (event) => {
    event.preventDefault();
    props.onSave();
  });

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      maxWidth={'xl'}
      fullWidth={true}
      scroll={'paper'}
    >
      <DialogTitle>
        <span>{props.title}</span>

        <div className={'w-full min-w-0 justify-end'}>
          {props.onRemove && <PBDeleteButton onClick={props.onRemove} />}
          <IconButton
            aria-label="close"
            onClick={props.onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>{props.dialogContent}</DialogContent>
      <DialogActions>
        {props.dialogActionsLeft}
        <PBSaveButton onClick={props.onSave} />
        <PBCancelButton onClick={props.onClose} />
        {props.dialogActionsRight}
      </DialogActions>
    </Dialog>
  );
};

export default PBDialog;

export type { PBDialogProps };
