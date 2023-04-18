import { Container, Grid } from '@mui/material';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import cls from './TodolistDetailsPage.module.scss';
import { EditableTodolistCard } from '@/features/EditableTodolistCard';
import { useSelector } from 'react-redux';
import { getTodolistData } from '@/features/EditableTodolistCard/model/selectors/editableTodolistCardSelectors';
import { Todos } from '@/entities/Todo';

interface TodolistDetailsPageProps {
    className?: string;
}

export const TodolistDetailsPage = memo((props: TodolistDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    const todolist = null;
    if (!id ) {
        return null;
    }

    return (
        <Container
            className={`${cls.TodolistDetailsPage} ${className}`}
            maxWidth="xl"
            sx={{ py: 3 }}
        >
            <Grid container justifyContent="space-between" item>
                <EditableTodolistCard id={Number(id)} />
                {/* <Todos todos={todolist?.todo} todolistId={todolist.id}/> */}
            </Grid>
        </Container>
    );
});
