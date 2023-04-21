import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { Todo } from '../../model/types/TodoSchema';
import { ShortenTodos } from '../ShortenTodos/ShortenTodos';
import cls from './Todos.module.scss';

interface TodosProps {
    className?: string;
    todos?: Todo[];
    hideDeleted?: boolean;
    isLoading?: boolean;
    onItemClickHandle?: (id: number) => void;
}

export const Todos = memo((props: TodosProps) => {
    const {
        className,
        todos,
        isLoading,
        hideDeleted = true,
        onItemClickHandle,
    } = props;

    const filteredTodos = hideDeleted ? todos?.filter((todo) => todo.isActive) : todos;
    
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
                <ShortenTodos todos={filteredTodos} onItemClickHandle={onItemClickHandle} />
            ) : (
                <Typography variant="body1">Для проекта нет задач.</Typography>
            )}
        </Box>
    );
});
