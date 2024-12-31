import { FC } from 'react';
import { Button } from '@mui/material';

interface PBDeleteButtonProps {
    onClick: () => void;
}

const PBDeleteButton: FC<PBDeleteButtonProps> = (props: PBDeleteButtonProps) => {
    return (
        <Button onClick={props.onClick}>Delete</Button>
    )
}

export default PBDeleteButton;
export type {PBDeleteButtonProps};
