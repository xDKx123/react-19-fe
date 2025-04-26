import {FC, useEffect} from 'react';
import {useParams} from "react-router";
import PBDialog from "../common/forms/PBDialog/PBDialog.tsx";

interface RouteParams {
    model: string,
    id: string
}

const AddEditModel: FC = () => {
    const {model, id} = useParams();

    const isNew = id === 'new';

    useEffect(() => {
        // Fetch data
    }, []);

    const handleSave = () => {
        // Save data
    }

    const handleClose = () => {
        // Close dialog
    }

    return (
        <PBDialog
        open={true}
        onClose={handleClose}
        onSave={handleSave}
        title={isNew ? 'Add' : 'Edit'}
        />
    )
}

export default AddEditModel;
