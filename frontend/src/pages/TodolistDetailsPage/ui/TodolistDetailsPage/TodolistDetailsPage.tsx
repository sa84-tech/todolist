import { Box, Container, Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import cls from './TodolistDetailsPage.module.scss';
import { EditableTodolistCard } from '@/features/EditableTodolistCard';
import { useSelector } from 'react-redux';
import { getTodolistData } from '@/features/EditableTodolistCard/model/selectors/editableTodolistCardSelectors';
import { Todos } from '@/entities/Todo';
import { AppLink } from '@/shared/ui/AppLink/AppLink';

interface TodolistDetailsPageProps {
    className?: string;
}

export const TodolistDetailsPage = memo((props: TodolistDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    const todolist = useSelector(getTodolistData);
    if (!id) {
        return null;
    }

    return (
        <Container
            className={`${cls.TodolistDetailsPage} ${className}`}
            maxWidth='xl'
            sx={{ py: 5 }}
        >
            <Grid container justifyContent='space-between'>
                <EditableTodolistCard id={Number(id)} />
                {todolist && (
                    <Grid item xs={12} md={4} sx={{ pl: 3 }}>
                        <Box mb={2}>
                            <Typography variant='h6' component='h2'>
                                Список задач для проекта
                            </Typography>
                            {todolist.id && (
                                <AppLink
                                    to={`/todos/${todolist.id}`}
                                    color='primary'
                                >
                                    Управление задачами
                                </AppLink>
                            )}
                        </Box>
                        <Todos
                            todos={todolist?.todo}
                            todolistId={todolist.id}
                        />
                    </Grid>
                )}
            </Grid>
        </Container>
    );
});
