import { Grid, Pagination } from '@mui/material';
import { memo } from 'react';

interface TodolistsPaginationProps {
    className?: string;
    onPageChange: (page: number) => void;
    pageCount: number;
}

export const TodolistsPagination = memo((props: TodolistsPaginationProps) => {
    const { className, onPageChange, pageCount } = props;

    const onChangeHandler = (_: any, page: number) => {
        onPageChange(page);
    };

    if (!pageCount || pageCount < 2) {
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
