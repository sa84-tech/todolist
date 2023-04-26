import { Todolists } from '@/entities/Todolist';
import { TodolistsPagination } from '@/features/TodolistsPagination';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Container, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    getTodolistsPageCount,
    getTodolistsPageIsLoading,
    getTodolistsPageLimit,
} from '../../model/selectors/todolistsPageSelectors';
import { fetchTodolists } from '../../model/services/fetchTodolists/fetchTodolists';
import { getTodolists, todolistsPageActions } from '../../model/slices/todolistsPageSlice';
import { SearchBar } from '@/features/SearchBar';

export const TodolistsPage = () => {
    const dispatch = useAppDispatch();

    const todolists = useSelector(getTodolists.selectAll);
    const isLoading = useSelector(getTodolistsPageIsLoading);
    const limit = useSelector(getTodolistsPageLimit);
    const pageCount = useSelector(getTodolistsPageCount)

    useEffect(() => {
        dispatch(fetchTodolists());
    }, [dispatch]);

    const onPageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(todolistsPageActions.setOffset((page - 1) * limit));
        dispatch(fetchTodolists());
    };

    return (
        <Container sx={{ py: 3 }}>
            <Grid container flexDirection='column'>
                <Grid
                    container
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Typography variant='h2' component='h1' sx={{ my: 2 }}>
                        <strong>Список проектов</strong>
                    </Typography>
                    <SearchBar />
                </Grid>
                {pageCount && (
                    <TodolistsPagination pageCount={pageCount} onPageChange={onPageChange} />
                )}
            </Grid>
            <Todolists isLoading={isLoading} todolists={todolists} />
        </Container>
    );
};
