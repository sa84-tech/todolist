import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material';
import { useState } from 'react';

interface AlertDialogProps {
    actionName: string;
    handleAction?: () => void;
    alertMessage?: string;
}

export const AlertDialog = (props: AlertDialogProps ) => {
    const { actionName, handleAction, alertMessage } = props;

    const [open, setOpen] = useState(false);

    const onClickOpen = () => {
        setOpen(true);
    };

    const onClickClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button
                variant='outlined'
                color='error'
                size="small"
                sx={{ m: 1 }}
                onClick={onClickOpen}
            >
                {actionName}
            </Button>
            <Dialog
                open={open}
                onClose={onClickClose}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
            >
                <DialogTitle id='alert-dialog-title'>
                    {'Требуется подтверждение'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id='alert-dialog-description'>
                        {alertMessage || 'Подтвердите действие'}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClickClose} autoFocus>
                        Отмена
                    </Button>
                    <Button onClick={handleAction} color='error'>
                        {actionName}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default AlertDialog;
