import AppAvatar from '@/shared/ui/AppAvatar/AppAvatar';
import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText
} from '@mui/material';
import { useCallback } from 'react';
import { Todo } from '../../model/types/TodoSchema';

interface ShortenTodosProps {
    todos: Todo[];
    activeItemId?: number;
    onItemClickHandle?: (item: Todo) => void;
}

export const ShortenTodos = ({ todos, activeItemId, onItemClickHandle }: ShortenTodosProps) => {
    const onClick = useCallback(
        (todo: Todo) => {
            if (onItemClickHandle) {
                onItemClickHandle(todo);
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
            {todos.map((todo) => {
                return (
                    <Box key={todo.id}>
                        <ListItem
                            alignItems="flex-start"
                            button
                            selected={+todo.id === activeItemId}
                            disabled={!todo.isActive}
                        >
                            <ListItemAvatar>
                                <AppAvatar 
                                    firstName={todo.executor.split(' ')[0]} 
                                    lastName={todo.executor.split(' ')[1]}
                                />
                            </ListItemAvatar>
                            <ListItemText
                                onClick={() => onClick(todo)}
                                primary={todo.title}
                                secondary={todo.content}
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </Box>
                );
            })}
        </List>
    );
};
