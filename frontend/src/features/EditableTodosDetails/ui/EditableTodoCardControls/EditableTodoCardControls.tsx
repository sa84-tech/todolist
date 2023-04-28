import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { formStateType } from '@/shared/types';
import AlertDialog from '@/shared/ui/AlertDialog/AlertDialog';
import { Button, Grid } from '@mui/material';
import { memo, useCallback } from 'react';
import { createTodo } from '../../model/services/createTodo/createTodo';
import { deleteTodo } from '../../model/services/deleteTodo/deleteTodo';
import { updateTodoData } from '../../model/services/updateTodoData/updateTodoData';
import { editableTodosDetailsActions } from '../../model/slices/editableTodosDetailsSlice';

interface EditableTodoCardControlsProps {
    className?: string;
    formState: formStateType;
    isTodoActive?: boolean;
    onRestore?: () => void;
}

export const EditableTodoCardControls = memo(
    (props: EditableTodoCardControlsProps) => {
        const { className, formState, isTodoActive = true, onRestore } = props;

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
                dispatch(createTodo());
            } else if (formState === 'edit') {
                dispatch(updateTodoData());
            }
        }, [dispatch, formState]);

        const onDelete = useCallback(() => {
            dispatch(deleteTodo());
        }, [dispatch]);

        const onCancelEdit = useCallback(() => {
            dispatch(editableTodosDetailsActions.cancelEdit());
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
                            disabled={!isTodoActive}
                        >
                            Изменить
                        </Button>
                        {isTodoActive ? (
                            <AlertDialog
                                handleAction={onDelete}
                                actionName='Удалить'
                                alertMessage='Задача будет удалена.'
                            />
                        ) : (
                            <Button
                                variant='outlined'
                                color='warning'
                                onClick={onRestore}
                                size='small'
                                sx={{ m: 1 }}
                            >
                                Восстановить
                            </Button>
                        )}
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
