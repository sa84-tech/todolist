import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { formStateType } from '@/shared/types';
import AlertDialog from '@/shared/ui/AlertDialog/AlertDialog';
import { Button, Grid } from '@mui/material';
import { memo, useCallback } from 'react';
import { editableTodosDetailsActions } from '../../model/slices/editableTodosDetailsSlice';
import { updateTodoData } from '../../model/services/updateTodoData/updateTodoData';

interface EditableTodoCardControlsProps {
    className?: string;
    formState: formStateType;
}

export const EditableTodoCardControls = memo((props: EditableTodoCardControlsProps) => {
    const { className, formState } = props;

    const dispatch = useAppDispatch();

    // Control buttons
    const onCreate = useCallback(() => {
        dispatch(editableTodosDetailsActions.setFormState('create'));
    }, [dispatch]);

    const onEdit = useCallback(() => {
        dispatch(editableTodosDetailsActions.setFormState('edit'));
    }, [dispatch]);

    const onSave = useCallback(() => {
        if (formState === 'create') {
            console.log(
                '🚀 ~ file: EditableTodolistCardControls.tsx:30 ~ onSave ~ formState:',
                formState,
            );
            // dispatch(createTodoData());
        } else if (formState === 'edit') {
            console.log(
                '🚀 ~ file: EditableTodolistCardControls.tsx:30 ~ onSave ~ formState:',
                formState,
            );
            dispatch(updateTodoData());
        }
    }, [dispatch, formState]);

    const onDelete = useCallback(() => {
        // dispatch(updateTodoData());
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(editableTodosDetailsActions.cancelEdit());
    }, [dispatch]);

    return (
        <Grid container justifyContent="start" sx={{ mt: 3 }}>
            {formState === 'default' ? (
                <>
                    <Button
                        variant="outlined"
                        color="success"
                        onClick={onCreate}
                        size="small"
                        sx={{ m: 1 }}
                    >
                        Добавить
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={onEdit}
                        size="small"
                        sx={{ m: 1 }}
                    >
                        Редактировать
                    </Button>
                    <AlertDialog
                        handleAction={onDelete}
                        actionName="Удалить"
                        alertMessage="Задача будет удалена."
                    />
                </>
            ) : (
                <>
                    <Button variant="outlined" onClick={onCancelEdit} size="small" sx={{ m: 1 }}>
                        Отменить
                    </Button>
                    <Button
                        variant="outlined"
                        color="success"
                        onClick={onSave}
                        size="small"
                        sx={{ m: 1 }}
                    >
                        Сохранить
                    </Button>
                </>
            )}
        </Grid>
    );
});
