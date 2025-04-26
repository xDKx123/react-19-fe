import { FC } from 'react';
import { Button } from '@mui/material';

interface PBCancelButtonProps {
  onClick: () => void;
}

const PBCancelButton: FC<PBCancelButtonProps> = (props: PBCancelButtonProps) => {
  return (
    <Button onClick={props.onClick} variant={"text"}>Cancel</Button>
  )
}

export default PBCancelButton;
export type {PBCancelButtonProps};