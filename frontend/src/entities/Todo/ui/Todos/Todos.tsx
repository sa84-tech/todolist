import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { Todo } from '../../model/types/TodoSchema';
import { ShortenTodos } from '../ShortenTodos/ShortenTodos';
import cls from './Todos.module.scss';

interface TodosProps {
    className?: string;
    view?: 'full' | 'shorten';
    todos: Todo[];
    todolistId?: number;
    isLoading?: boolean;
}

export const Todos = memo((props: TodosProps) => {
    const { className, view = 'shorten', todos, todolistId, isLoading } = props;

    return (
            <Grid className={`${cls.Todo} ${className}`} item xs={12} md={4} sx={{ pl: 3 }}>
                <Typography variant="h6" component="h2">
                    Список задач для проекта
                </Typography>
                {todolistId && <AppLink to={`/todos/${todolistId}`}>Управление задачами</AppLink>}
                {todos.length ? (
                    <ShortenTodos todos={todos} />
                ) : (
                    <Typography variant="body1">Для проекта нет задач.</Typography>
                )}
            </Grid>
    );
});
