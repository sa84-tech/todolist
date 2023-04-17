import { CircularProgress, Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { Todolist } from '../../model/types/todolist';
import { TodolistsItem } from '../TodolistsItem/TodolistsItem';

interface TodolistProps {
    className?: string;
    todolists: Todolist[];
    isLoading?: boolean;
}

export const Todolists = memo((props: TodolistProps) => {
    const { className, todolists, isLoading } = props;

    const renderListItem = (todolist: Todolist) => (
        <Grid key={todolist.id} item={true} xs={12} sm={6} md={4} lg={3} sx={{ p: 1 }}>
            <TodolistsItem todolist={todolist} />
        </Grid>
    );

    if (!isLoading && !todolists.length) {
        return (
            <div className={className}>
                <Typography variant="h2" component="h5" sx={{ my: 2 }}>
                    <strong>Список пустой</strong>
                </Typography>
            </div>
        );
    }

    return (
        <Grid container className={className}>
            {todolists.length > 0 ? todolists.map(renderListItem) : null}
            {isLoading && <CircularProgress />}
        </Grid>
    );
});
