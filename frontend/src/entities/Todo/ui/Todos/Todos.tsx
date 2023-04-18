import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Box, Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { Todo } from '../../model/types/TodoSchema';
import { ShortenTodos } from '../ShortenTodos/ShortenTodos';
import cls from './Todos.module.scss';

interface TodosProps {
    className?: string;
    view?: 'full' | 'shorten';
    todos?: Todo[];
    todolistId?: number;
    isLoading?: boolean;
}

export const Todos = memo((props: TodosProps) => {
    const { className, view = 'shorten', todos, todolistId, isLoading } = props;

    return (
            <Box className={`${cls.Todo} ${className}`} >
                {todos?.length ? (
                    <ShortenTodos todos={todos} />
                ) : (
                    <Typography variant="body1">Для проекта нет задач.</Typography>
                )}
            </Box>
    );
});
