import AppAvatar from '@/shared/ui/AppAvatar/AppAvatar';
import { CheckCircleOutline, HighlightOff } from '@mui/icons-material';
import {
    Box,
    Divider,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { memo, useCallback } from 'react';
import { Todo } from '../../model/types/TodoSchema';

interface TodosItemProps {
    className?: string;
    todo: Todo;
    selectedItemId: number;
    onClickHandler: (id: number) => void;
}

export const TodosItem = memo((props: TodosItemProps) => {
    const { className, todo, onClickHandler, selectedItemId } = props;

    const onClick = useCallback(
        (_: any) => {
            onClickHandler(todo.id);
        },
        [todo, onClickHandler]
    );

    return (
        <Box className={className}>
            <ListItemButton
                alignItems='flex-start'
                selected={todo.id === selectedItemId}
                onClick={onClick}
            >
                <ListItemAvatar>
                    <AppAvatar fullName={todo.executor?.fullName} />
                </ListItemAvatar>
                <ListItemText primary={todo.title} secondary={todo.content} />
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
    );
});
