import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import AlertDialog from '@/shared/ui/AlertDialog/AlertDialog';
import { Button, Grid } from '@mui/material';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getTodolistReadonly } from '../../model/selectors/editableTodolistCardSelectors';
import { updateTodolistData } from '../../model/services/updateTodolistData/updateTodolistData';
import { editableTodolistCardActions } from '../../model/slices/editableTodolistCardSlice';

interface EditableTodolistCardControlsProps {  // Поменять название
    className?: string;
}

export const EditableTodolistCardControls = memo((props: EditableTodolistCardControlsProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const readonly = useSelector(getTodolistReadonly);

    const onEdit = useCallback(() => {
        dispatch(editableTodolistCardActions.setReadonly(false));
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateTodolistData());
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(editableTodolistCardActions.cancelEdit());
    }, [dispatch]);

    return (
        <Grid container justifyContent="start" sx={{ mt: 3 }}>
            {readonly ? (
                <>
                    <Button variant="outlined" onClick={onEdit} size="small" sx={{ m: 1 }}>
                        Редактировать
                    </Button>
                    <AlertDialog
                        handleAction={onEdit}
                        actionName="Удалить"
                        alertMessage="Проект и связанные задачи будут удалены."
                    />
                </>
            ) : (
                <>
                    <Button variant="outlined" onClick={onSave} size="small" sx={{ m: 1 }}>
                        Сохранить
                    </Button>
                    <Button variant="outlined" onClick={onCancelEdit} size="small" sx={{ m: 1 }}>
                        Отменить
                    </Button>
                </>
            )}
        </Grid>
    );
});
