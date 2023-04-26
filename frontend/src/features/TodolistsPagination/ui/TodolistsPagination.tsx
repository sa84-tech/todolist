import { memo } from 'react';
import cls from './TodolistsPagination.module.scss';
import { Grid, Pagination } from '@mui/material';

interface TodolistsPaginationProps {
    className?: string;
    onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
    pageCount: number;
}

export const TodolistsPagination = memo((props: TodolistsPaginationProps) => {
    const { className, onPageChange, pageCount } = props;

    return (
        <div className={className}>
            <Grid item alignSelf='end'>
                <Pagination
                    count={pageCount}
                    onChange={onPageChange}
                    variant='outlined'
                    shape='rounded'
                    sx={{ mb: 1, alignSelf: 'flex-end' }}
                />
            </Grid>
        </div>
    );
});
