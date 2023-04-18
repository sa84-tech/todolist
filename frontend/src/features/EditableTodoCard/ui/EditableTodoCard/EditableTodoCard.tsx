import { Grid, Typography } from '@mui/material';
import cls from './EditableTodoCard.module.scss';
import { memo } from 'react';
import { Todos } from '@/entities/Todo';
import { TodoCard } from '@/entities/Todo/ui/TodoCard/TodoCard';
import { useSelector } from 'react-redux';
import { getTodolistData } from '@/features/EditableTodolistCard/model/selectors/editableTodolistCardSelectors';
import { EditableTodoCardControls } from '../EditableTodolistCardControls/EditableTodolistCardControls';

interface EditableTodoCardProps {
    className?: string;
    id?: number;
}

export const EditableTodoCard = memo((props: EditableTodoCardProps) => {
    const { className } = props;

    const todolist = useSelector(getTodolistData);

    return (
        <Grid
            className={`${cls.EditableTodoCard} ${className}`}
            justifyContent='space-between'
            container={true}
        >
            <Grid item xs={12} md={7} sx={{ pr: 3 }} justifyContent='end'>
                <Typography variant='h6' component='h2'>
                    Список задач
                </Typography>
                <Todos todos={todolist?.todo} todolistId={todolist?.id} />
            </Grid>
            <Grid item xs={12} mt={2} md={5} pl={3}>
                <TodoCard data={todolist?.todo[0]} />
                <EditableTodoCardControls />
            </Grid>
        </Grid>
    );
});
