import {FC, useState} from 'react';
import {Alert, AlertTitle, Snackbar} from "@mui/material";

interface PBSnackbarProps {
    open: boolean;
    message: string;
    severity: 'error' | 'warning' | 'info' | 'success';

    title?: string;
}

const PBSnackbar: FC<PBSnackbarProps> = (props: PBSnackbarProps) => {
    const [open, setOpen] = useState(false);

    const handleClose = (_, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
            <Alert sx={{ mb: 2 }} severity={props.severity} sx={{ width: '100%' }}>
                {
                    props.title &&
                    <AlertTitle>{props.title}</AlertTitle>
                }
                {props.message}
            </Alert>
        </Snackbar>
    );
}

export default PBSnackbar;
