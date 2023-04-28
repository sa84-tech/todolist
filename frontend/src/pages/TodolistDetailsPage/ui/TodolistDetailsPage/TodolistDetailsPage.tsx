import { Todos } from '@/entities/Todo';
import { EditableTodolistCard } from '@/features/EditableTodolistCard';
import { getTodolistData } from '@/features/EditableTodolistCard/model/selectors/editableTodolistCardSelectors';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { createSearchParams, useNavigate, useParams } from 'react-router-dom';

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
            className={className}
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
                                Список задач
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
