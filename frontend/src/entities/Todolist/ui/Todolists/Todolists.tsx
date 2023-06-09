import { CircularProgress, Grid, Typography } from '@mui/material';
import { memo, useCallback } from 'react';
import { Todolist } from '../../model/types/todolist';
import { TodolistsItem } from '../TodolistsItem/TodolistsItem';

interface TodolistProps {
    className?: string;
    todolists: Todolist[];
    isLoading?: boolean;
}

export const Todolists = memo((props: TodolistProps) => {
    const { className, todolists, isLoading } = props;

    const renderListItem = useCallback(
        (todolist: Todolist) => (
            <Grid key={todolist.id} item={true} xs={12} sm={6} md={4} lg={3} sx={{ p: 1 }}>
                <TodolistsItem todolist={todolist} />
            </Grid>
        ),
        [todolists],
    );

    if (isLoading) {
        return (
            <Grid container className={className}>
                <CircularProgress />
            </Grid>
        );
    }

    if (!isLoading && !todolists.length) {
        return (
            <Grid container className={className}>
                <Typography variant="h5" sx={{ my: 2 }}>
                    Списки задач отсутствуют
                </Typography>
            </Grid>
        );
    }

    return (
        <Grid container className={className} spacing={3}>
            {todolists.map(renderListItem)}
        </Grid>
    );
});
