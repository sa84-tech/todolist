import { memo } from 'react';
import cls from './TodolistsPagination.module.scss';
import { Grid, Pagination } from '@mui/material';

interface TodolistsPaginationProps {
    className?: string;
    onPageChange: (page: number) => void;
    pageCount: number;
}

export const TodolistsPagination = memo((props: TodolistsPaginationProps) => {
    const { className, onPageChange, pageCount } = props;

    const onChangeHandler = (_: React.ChangeEvent<unknown>, page: number) => {
        onPageChange(page);
    };

    if (!pageCount) {
        return null;
    }

    return (
        <Grid item alignSelf="end" className={className} mb={1}>
            <Pagination
                count={pageCount}
                onChange={onChangeHandler}
                variant="outlined"
                shape="rounded"
                sx={{ mb: 1, alignSelf: 'flex-end' }}
            />
        </Grid>
    );
});
