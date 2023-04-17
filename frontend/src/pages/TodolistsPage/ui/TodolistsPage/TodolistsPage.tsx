import { Todolists } from '@/entities/Todolist';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Container, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchTodolists } from '../../model/services/fetchTodolists/fetchTodolists';
import { getTodolists } from '../../model/slices/todolistsPageSlice';

export const TodolistsPage = () => {
    const dispatch = useAppDispatch();
    const todolists = useSelector(getTodolists.selectAll);

    useEffect(() => {
        dispatch(fetchTodolists());
    }, [dispatch]);

    return (
        <Container sx={{ py: 3 }}>
            <Grid container flexDirection="column">
                <Grid container justifyContent="space-between" alignItems="center">
                    <Typography variant="h2" component="h1" sx={{ my: 2 }}>
                        <strong>Список проектов</strong>
                    </Typography>
                </Grid>
            </Grid>
            <Todolists todolists={todolists} />
        </Container>
    );
};
