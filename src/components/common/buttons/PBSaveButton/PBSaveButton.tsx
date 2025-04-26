import { FC } from 'react';
import { Button } from '@mui/material';

interface PBSaveButtonProps {
  onClick: () => void;
}

const PBSaveButton: FC<PBSaveButtonProps> = (props: PBSaveButtonProps) => {
  return (
    <Button onClick={props.onClick} variant={"contained"}>Save</Button>
  )
}

export default PBSaveButton;
export type {PBSaveButtonProps};