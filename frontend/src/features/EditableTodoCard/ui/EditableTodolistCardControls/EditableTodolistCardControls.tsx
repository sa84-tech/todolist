import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import AlertDialog from '@/shared/ui/AlertDialog/AlertDialog';
import { Button, Grid } from '@mui/material';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { editableTodoCardActions } from '../../model/slices/editableTodoCardSlice';
import { getTodoCardformState } from '../../model/selectors/editableTodoCardSelectors';

interface EditableTodoCardControlsProps {
    className?: string;
}

export const EditableTodoCardControls = memo(
    (props: EditableTodoCardControlsProps) => {
        const { className } = props;

        const dispatch = useAppDispatch();
        const formState = useSelector(getTodoCardformState);

        const onCreate = useCallback(() => {
            dispatch(editableTodoCardActions.setFormState('create'));
        }, [dispatch]);

        const onEdit = useCallback(() => {
            dispatch(editableTodoCardActions.setFormState('edit'));
        }, [dispatch]);

        const onSave = useCallback(() => {
            if (formState === 'create') {
                console.log("🚀 ~ file: EditableTodolistCardControls.tsx:30 ~ onSave ~ formState:", formState)
                // dispatch(createTodoData());
            } else {
                console.log("🚀 ~ file: EditableTodolistCardControls.tsx:30 ~ onSave ~ formState:", formState)
                // dispatch(updateTodoData());
            }
        }, [dispatch, formState]);

        const onDelete = useCallback(() => {
            // dispatch(updateTodoData());
        }, [dispatch]);

        const onCancelEdit = useCallback(() => {
            dispatch(editableTodoCardActions.cancelEdit());
        }, [dispatch]);

        return (
            <Grid container justifyContent='start' sx={{ mt: 3 }}>
                {formState === 'default' ? (
                    <>
                        <Button
                            variant='outlined'
                            color='success'
                            onClick={onCreate}
                            size='small'
                            sx={{ m: 1 }}
                        >
                            Добавить
                        </Button>
                        <Button
                            variant='outlined'
                            color='primary'
                            onClick={onEdit}
                            size='small'
                            sx={{ m: 1 }}
                        >
                            Редактировать
                        </Button>
                        <AlertDialog
                            handleAction={onDelete}
                            actionName='Удалить'
                            alertMessage='Задача будет удалена.'
                        />
                    </>
                ) : (
                    <>
                        <Button
                            variant='outlined'
                            onClick={onCancelEdit}
                            size='small'
                            sx={{ m: 1 }}
                        >
                            Отменить
                        </Button>
                        <Button
                            variant='outlined'
                            color='success'
                            onClick={onSave}
                            size='small'
                            sx={{ m: 1 }}
                        >
                            Сохранить
                        </Button>
                    </>
                )}
            </Grid>
        );
    }
);
