import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { Todo } from '../../model/types/TodoSchema';
import { ShortenTodos } from '../ShortenTodos/ShortenTodos';
import cls from './Todos.module.scss';

interface TodosProps {
    className?: string;
    todos?: Todo[];
    showDeleted?: boolean;
    showCompleted?: boolean;
    isLoading?: boolean;
    onItemClickHandle?: (id: number) => void;
}

export const Todos = memo((props: TodosProps) => {
    const {
        className,
        todos,
        isLoading,
        showDeleted = false,
        showCompleted = true,
        onItemClickHandle,
    } = props;

    const filterDeletedTodos = showDeleted
        ? todos
        : todos?.filter((todo) => todo.isActive);

    const filteredTodos = showCompleted
        ? filterDeletedTodos
        : filterDeletedTodos?.filter((todo) => !todo.isCompleted);

    if (isLoading) {
        return (
            <Box className={`${cls.Todo} ${className}`}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box className={`${cls.Todo} ${className}`}>
            {filteredTodos?.length ? (
                <ShortenTodos
                    todos={filteredTodos}
                    onItemClickHandle={onItemClickHandle}
                />
            ) : (
                <Typography variant='body1'>Задачи отсутсвуют.</Typography>
            )}
        </Box>
    );
});
