import {Box, Button, Typography} from '@mui/material';
import { FC } from 'react';
import {Add} from "@mui/icons-material";

interface BrowseViewHeaderProps {
    title: string;
}

const BrowseViewHeader: FC<BrowseViewHeaderProps> = (props: BrowseViewHeaderProps) => {
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h4" component="h1" gutterBottom>
                {props.title}
            </Typography>
            <Button
                variant={"contained"}
                color={"primary"}
                startIcon={<Add />}
                onClick={() => {
                    console.log('Add new clicked');
                }}
            >
                Add New
            </Button>
        </Box>
    )
}

export default BrowseViewHeader;
