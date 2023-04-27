import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { FormControlLabel, Grid, Switch, Typography } from '@mui/material';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
    getTodosDetailsForm,
    getTodosDetailsIsLoading,
    getTodosDetailsTodolist,
    getTodosDetailsformState,
} from '../../model/selectors/editableTodoCardSelectors';
import {
    getTodos
} from '../../model/slices/editableTodosDetailsSlice';

interface EditableTodosDetailsProps {
    deletedChecked: boolean;
    completedChecked: boolean;
    setDeletedChecked: (checked: boolean) => void;
    setCompletedChecked: (checked: boolean) => void;
}

export const EditableTodosDetailsHeader = memo(
    (props: EditableTodosDetailsProps) => {
        const {
            deletedChecked,
            completedChecked,
            setDeletedChecked,
            setCompletedChecked,
        } = props;
        const dispatch = useAppDispatch();
        const todos = useSelector(getTodos.selectAll);
        const isLoading = useSelector(getTodosDetailsIsLoading);
        const formData = useSelector(getTodosDetailsForm);
        const todolist = useSelector(getTodosDetailsTodolist);

        const formState = useSelector(getTodosDetailsformState);

        const switchDeletedHandler = useCallback(
            (event: React.ChangeEvent<HTMLInputElement>) => {
                setDeletedChecked(event.target.checked);
            },
            [dispatch]
        );

        const switchCompletedHandler = useCallback(
            (event: React.ChangeEvent<HTMLInputElement>) => {
                setCompletedChecked(event.target.checked);
            },
            [dispatch]
        );

        return (
            <Grid container justifyContent='space-between'>
                <Grid item>
                    <Typography variant='h5'>Список задач</Typography>
                </Grid>
                <Grid flexDirection='column'>
                    <FormControlLabel
                        control={
                            <Switch
                                sx={{ mr: 2 }}
                                checked={completedChecked}
                                onChange={switchCompletedHandler}
                            />
                        }
                        label='Выполненные'
                        labelPlacement='start'
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                sx={{ mr: 2 }}
                                checked={deletedChecked}
                                onChange={switchDeletedHandler}
                            />
                        }
                        label='Удаленные'
                        labelPlacement='start'
                    />
                </Grid>
            </Grid>
        );
    }
);
