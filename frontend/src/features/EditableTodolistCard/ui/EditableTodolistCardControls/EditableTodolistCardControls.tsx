import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import AlertDialog from '@/shared/ui/AlertDialog/AlertDialog';
import { Button, Grid } from '@mui/material';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getTodolistFormState } from '../../model/selectors/editableTodolistCardSelectors';
import { updateTodolistData } from '../../model/services/updateTodolistData/updateTodolistData';
import { editableTodolistCardActions } from '../../model/slices/editableTodolistCardSlice';

interface EditableTodolistCardControlsProps {  // Поменять название
    className?: string;
}

export const EditableTodolistCardControls = memo((props: EditableTodolistCardControlsProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const fromState = useSelector(getTodolistFormState);

    const onEdit = useCallback(() => {
        dispatch(editableTodolistCardActions.setFormState('edit'));
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateTodolistData());
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(editableTodolistCardActions.cancelEdit());
    }, [dispatch]);

    const onDelete = useCallback(() => {
        dispatch(editableTodolistCardActions.cancelEdit());
    }, [dispatch]);

    return (
        <Grid container justifyContent="start" sx={{ mt: 3 }}>
            {fromState === 'default' ? (
                <>
                    <Button variant="outlined" onClick={onEdit} size="small" sx={{ m: 1 }}>
                        Редактировать
                    </Button>
                    <AlertDialog
                        handleAction={onCancelEdit}
                        actionName="Удалить"
                        alertMessage="Проект и связанные задачи будут удалены."
                        
                    />
                </>
            ) : (
                <>
                    <Button variant="outlined" onClick={onCancelEdit} size="small" sx={{ m: 1 }}>
                        Отменить
                    </Button>
                    <Button variant="outlined" color='success' onClick={onSave} size="small" sx={{ m: 1 }}>
                        Сохранить
                    </Button>
                </>
            )}
        </Grid>
    );
});
