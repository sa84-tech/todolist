import AppAvatar from '@/shared/ui/AppAvatar/AppAvatar';
import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import { MouseEventHandler, useCallback } from 'react';
import { Todo } from '../../model/types/TodoSchema';

interface ShortenTodosProps {
    todos: Todo[];
    activeItemId?: number;
    hideDeleted?: boolean;
    onItemClickHandle?: (id: number) => void;
}

export const ShortenTodos = ({ todos, activeItemId, onItemClickHandle, hideDeleted = true }: ShortenTodosProps) => {
    const onClickHandler = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (e && onItemClickHandle) {
                const { value } = e.currentTarget.dataset;
                onItemClickHandle(Number(value));
            }
        },
        [onItemClickHandle],
    );

    return (
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
            {todos.map((todo) => (
                <Box key={todo.id}>
                    <ListItemButton
                        alignItems="flex-start"
                        selected={+todo.id === activeItemId}
                        disabled={!todo.isActive}
                        onClick={onClickHandler}
                        data-value={todo.id}
                    >
                        <ListItemAvatar>
                            <AppAvatar fullName={todo.executor} />
                        </ListItemAvatar>
                        <ListItemText primary={todo.title} secondary={todo.content} />
                    </ListItemButton>
                    <Divider variant="inset" component="li" />
                </Box>
            ))}
        </List>
    );
};
