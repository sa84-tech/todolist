import { Box, CircularProgress, List, Typography } from '@mui/material';
import { memo, useCallback, useState } from 'react';
import { Todo } from '../../model/types/TodoSchema';
import { TodosItem } from '../TodosItem/TodosItem';
import cls from './Todos.module.scss';

interface TodosProps {
    className?: string;
    todos?: Todo[];
    showDeleted?: boolean;
    showCompleted?: boolean;
    isLoading?: boolean;
    selectedTodoId?: number;
    onItemClickHandle?: (id: number) => void;
}

const filterTodos = (todos?: Todo[], showDeleted?: boolean, showCompleted?: boolean) => {
    const filterDeletedTodos = showDeleted ? todos : todos?.filter((todo) => todo.isActive);

    const filteredTodos = showCompleted
        ? filterDeletedTodos
        : filterDeletedTodos?.filter((todo) => !todo.isCompleted);

    return filteredTodos;
};

export const Todos = memo((props: TodosProps) => {
    const {
        className,
        todos,
        isLoading,
        showDeleted = false,
        showCompleted = true,
        onItemClickHandle,
        selectedTodoId = 0,
    } = props;

    const [selected, setSelected] = useState<number>(selectedTodoId);

    const onClickHandler = useCallback(
        (id: number) => {
            setSelected(id);
            onItemClickHandle?.(id);
        },
        [onItemClickHandle, setSelected],
    );

    const filteredTodos = filterTodos(todos, showDeleted, showCompleted);

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
                <List
                    sx={{
                        'width': '100%',
                        'bgcolor': 'background.paper',
                        'position': 'relative',
                        'overflow': 'auto',
                        'maxHeight': 600,
                        '& ul': { padding: 0 },
                    }}
                >
                    {filteredTodos.map((todo) => (
                        <TodosItem
                            todo={todo}
                            key={todo.id}
                            onClickHandler={onClickHandler}
                            selectedItemId={selected}
                        />
                    ))}
                </List>
            ) : (
                <Typography variant="body1">Задачи отсутсвуют.</Typography>
            )}
        </Box>
    );
});
