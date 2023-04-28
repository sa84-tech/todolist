import { Todolists } from '@/entities/Todolist';
import { TodolistsPagination } from '@/features/TodolistsPagination';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Container, Grid, Typography } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    getTodolistsPageCount,
    getTodolistsPageIsLoading,
    getTodolistsPageLimit,
    getTodolistsPageSearch,
} from '../../model/selectors/todolistsPageSelectors';
import { fetchTodolists } from '../../model/services/fetchTodolists/fetchTodolists';
import { getTodolists, todolistsPageActions } from '../../model/slices/todolistsPageSlice';
import { SearchBar } from '@/features/SearchBar';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';

export const TodolistsPage = () => {
    const dispatch = useAppDispatch();

    const todolists = useSelector(getTodolists.selectAll);
    const isLoading = useSelector(getTodolistsPageIsLoading);
    const limit = useSelector(getTodolistsPageLimit);
    const pageCount = useSelector(getTodolistsPageCount);
    const search = useSelector(getTodolistsPageSearch);

    const onPageChange = (page: number) => {
        dispatch(todolistsPageActions.setOffset((page - 1) * limit));
        dispatch(fetchTodolists());
    };

    const debouncedFetchData = useDebounce(() => onPageChange(1), 500);

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(todolistsPageActions.setSearch(search));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData],
    );

    useEffect(() => {
        dispatch(fetchTodolists());
    }, [dispatch]);

    return (
        <Container sx={{ py: 3 }}>
            <Grid container flexDirection="column">
                <Grid container justifyContent="space-between" alignItems="center">
                    <Typography variant="h2" component="h1" sx={{ my: 2 }}>
                        <strong>Списки дел</strong>
                    </Typography>
                    <SearchBar search={search} onChangeSearch={onChangeSearch} />
                </Grid>
                <TodolistsPagination pageCount={pageCount} onPageChange={onPageChange} />
            </Grid>
            <Todolists isLoading={isLoading} todolists={todolists} />
        </Container>
    );
};
