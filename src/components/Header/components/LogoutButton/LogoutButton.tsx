import React, { FC } from 'react';
import {Button} from "@mui/material";
import {useNavigate} from "react-router";

const LogoutButton: FC = () => {
    const navigate = useNavigate();

    const onLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        //TODO: Clear cookies

        //Redirect to login page
        navigate('/login');
    }

    return (
        <Button onClick={onLogout}>
            Logout
        </Button>
    )
}

export default LogoutButton;
