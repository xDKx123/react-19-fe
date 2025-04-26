import { FC } from 'react';
import { Box, Button, Divider, Menu } from '@mui/material';
import {useNavigate} from "react-router";
import LogoutButton from "../LogoutButton/LogoutButton.tsx";

interface UserHeaderDialogProps {
    anchorEl: HTMLElement | null;
    onClose: () => void;
}

const UserHeaderDialog: FC<UserHeaderDialogProps> = (props: UserHeaderDialogProps) => {
    return (
        <Menu open={Boolean(props.anchorEl)} anchorEl={props.anchorEl} onClose={props.onClose}>
            <Box className={"flex flex-col items-start"}>
                <Button>
                    Settings
                </Button>
                <Button>
                    System info
                </Button>
            </Box>
            <Divider />
            <LogoutButton />
        </Menu>
    )
}

export default UserHeaderDialog;
export type { UserHeaderDialogProps };