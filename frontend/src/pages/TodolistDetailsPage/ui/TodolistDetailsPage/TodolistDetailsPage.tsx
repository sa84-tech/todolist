import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { memo, useCallback } from 'react';
import { createSearchParams, useNavigate, useParams } from 'react-router-dom';
import cls from './TodolistDetailsPage.module.scss';
import { EditableTodolistCard } from '@/features/EditableTodolistCard';
import { useSelector } from 'react-redux';
import { getTodolistData } from '@/features/EditableTodolistCard/model/selectors/editableTodolistCardSelectors';
import { Todos } from '@/entities/Todo';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface TodolistDetailsPageProps {
    className?: string;
}

export const TodolistDetailsPage = memo((props: TodolistDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const todolist = useSelector(getTodolistData);
    if (!id) {
        return null;
    }

    const onBackClicked = useCallback(() => {
        navigate(RoutePath.main);
    }, [navigate]);

    const onTodoClickHandle = useCallback(
        (todoId: number) => {
            navigate({
                pathname: RoutePath.todo_details + id,
                search: `?${createSearchParams({ todo: String(todoId) })}`,
            })
        },
        [id],
    );

    return (
        <Container
            className={`${cls.TodolistDetailsPage} ${className}`}
            maxWidth="xl"
            sx={{ py: 3 }}
        >
            <Button onClick={onBackClicked}>Назад</Button>
            <Grid container pt={1} justifyContent="space-between">
                <EditableTodolistCard id={Number(id)} />
                {todolist && (
                    <Grid item xs={12} md={4} sx={{ pl: 3 }}>
                        <Box mb={2}>
                            <Typography variant="h6" component="h2">
                                Список задач для проекта
                            </Typography>
                            {todolist.id && (
                                <AppLink to={`/todos/${todolist.id}`} color="primary">
                                    Управление задачами
                                </AppLink>
                            )}
                        </Box>
                        <Todos todos={todolist?.todo} onItemClickHandle={onTodoClickHandle} />
                    </Grid>
                )}
            </Grid>
        </Container>
    );
});
