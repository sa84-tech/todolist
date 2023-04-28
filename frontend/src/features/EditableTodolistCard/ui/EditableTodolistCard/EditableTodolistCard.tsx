import { TodolistCard, TodolistForm } from '@/entities/Todolist';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Grid } from '@mui/material';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    getTodolistData,
    getTodolistError,
    getTodolistIsLoading,
    getTodolistFormState,
} from '../../model/selectors/editableTodolistCardSelectors';
import { fetchTodolistData } from '../../model/services/fetchTodolistData/fetchTodolistData';
import { EditableTodolistCardControls } from '../EditableTodolistCardControls/EditableTodolistCardControls';

interface EditableTodolistCardProps {
    className?: string;
    id?: number;
}

export const EditableTodolistCard = memo((props: EditableTodolistCardProps) => {
    const { className, id } = props;
    const dispatch = useAppDispatch();
    const formData = useSelector(getTodolistData);
    const isLoading = useSelector(getTodolistIsLoading);
    const error = useSelector(getTodolistError);

    const formState = useSelector(getTodolistFormState);

    useEffect(() => {
        if (id) {
            dispatch(fetchTodolistData(id));
        }
    }, [dispatch, id]);

    return (
        <Grid className={className} xs={12} md={7} sx={{ pr: 3 }} justifyContent="end" item={true}>
            {formState === 'default' ? (
                <TodolistCard data={formData} isLoading={isLoading} error={error} />
            ) : (
                <TodolistForm data={formData} isLoading={isLoading} error={error} />
            )}
            <EditableTodolistCardControls />
        </Grid>
    );
});
