import React, { FC, useState } from 'react';
import { Button } from '@mui/material';
import UserHeaderDialog from '../UserHeaderDialog/UserHeaderDialog.lazy.tsx';

const UserHeader: FC = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const onClose = () => {
        setAnchorEl(null);
    }

    const showDialog = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    return (
        <>
            <Button onClick={showDialog}>
                loggedin user
            </Button>
            <UserHeaderDialog anchorEl={anchorEl} onClose={onClose}/>
        </>
    )
}

export default UserHeader;
