import { TodolistCard } from '@/entities/Todolist';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Grid } from '@mui/material';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getTodolistData, getTodolistError, getTodolistIsLoading, getTodolistReadonly } from '../../model/selectors/editableTodolistCardSelectors';
import { fetchTodolistData } from '../../model/services/fetchTodolistData/fetchTodolistData';
import { EditableTodolistCardControls } from '../EditableTodolistCardControls/EditableTodolistCardControls';
import cls from './EditableTodolistCard.module.scss';

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
    const readonly = useSelector(getTodolistReadonly);

    useEffect(() => {
        if (id) {
            dispatch(fetchTodolistData(id));
        }
    }, [dispatch, id]);
    
    return (
            <Grid
                className={`${cls.EditableTodolistCard} ${className}`}
                justifyContent="space-between"
                container={true}
                item={true}
            >
                <TodolistCard 
                    data={formData}
                    readonly={readonly}
                    isLoading={isLoading}
                    error={error}
                />
                <EditableTodolistCardControls />
           </Grid>
    );
});
