import AppAvatar from '@/shared/ui/AppAvatar/AppAvatar';
import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { MouseEventHandler, useCallback } from 'react';
import { Todo } from '../../model/types/TodoSchema';
import { HighlightOff, Home } from '@mui/icons-material';
import { CheckCircleOutline } from '@mui/icons-material';
import cls from './ShortenTodos.module.scss';

interface ShortenTodosProps {
    todos: Todo[];
    activeItemId?: number;
    showDeleted?: boolean;
    onItemClickHandle?: (id: number) => void;
}

export const ShortenTodos = ({
    todos,
    activeItemId,
    onItemClickHandle,
    showDeleted = true,
}: ShortenTodosProps) => {
    const onClickHandler = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (e && onItemClickHandle) {
                const { value } = e.currentTarget.dataset;
                onItemClickHandle(Number(value));
            }
        },
        [onItemClickHandle]
    );

    const opacityClass = cls.opacity;

    const getOpacityClass = useCallback((isActive?: boolean) => {
        return !isActive ? cls.opacity : '';
    }, []);

    return (
        <List
            sx={{
                width: '100%',
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 600,
                '& ul': { padding: 0 },
            }}
        >
            {todos.map((todo) => (
                <Box key={todo.id} className={getOpacityClass(todo.isActive)}>
                    <ListItemButton
                        alignItems='flex-start'
                        selected={+todo.id === activeItemId}
                        // disabled={!todo.isActive}
                        onClick={onClickHandler}
                        data-value={todo.id}
                    >
                        <ListItemAvatar>
                            <AppAvatar fullName={todo.executor?.fullName} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={todo.title}
                            secondary={todo.content}
                        />
                        <ListItemIcon>
                            {!todo.isActive ? (
                                <HighlightOff color='error' />
                            ) : (
                                todo.isCompleted && (
                                    <CheckCircleOutline color='success' />
                                )
                            )}
                        </ListItemIcon>
                    </ListItemButton>
                    <Divider variant='inset' component='li' />
                </Box>
            ))}
        </List>
    );
};
