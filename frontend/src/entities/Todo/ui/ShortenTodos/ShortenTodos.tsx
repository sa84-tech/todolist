import {
    List
} from '@mui/material';
import { memo, useCallback, useState } from 'react';
import { Todo } from '../../model/types/TodoSchema';
import { ShortenTodosItem } from '../ShortenTodosItem/ShortenTodosItem';

interface ShortenTodosProps {
    todos: Todo[];
    activeItemId?: number;
    showDeleted?: boolean;
    onItemClickHandle?: (id: number) => void;
}

export const ShortenTodos = memo(
    ({ todos, activeItemId = 0, onItemClickHandle }: ShortenTodosProps) => {
        const [active, setActive] = useState<number>(activeItemId);

        const onClickHandler = useCallback(
            (id: number) => {
                setActive(id);
                onItemClickHandle?.(id);
            },
            [onItemClickHandle]
        );

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
                    <ShortenTodosItem
                        todo={todo}
                        key={todo.id}
                        onClickHandler={onClickHandler}
                        activeTodoId={active}
                    />
                ))}
            </List>
        );
    }
);
