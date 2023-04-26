import { Box, InputBase, Paper } from '@mui/material';
import { memo } from 'react';
import cls from './SearchBar.module.scss';
import { Search as SearchIcon } from '@mui/icons-material';
import {grey } from '@mui/material/colors';

interface SearchBarProps {
    className?: string;
}

export const SearchBar = memo((props: SearchBarProps) => {
    const { className } = props;

    return (
        <Paper
            className={cls.SearchBar}
            component='form'
            variant='outlined'
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: 400,
                maxHeight: '40px',
                // bgcolor: 'grey.50',
            }}
        >
            <Box className={cls.iconWrapper} sx={{ mx: 1, alignItems: 'center', color: grey[400] }}>
                <SearchIcon />
            </Box>
            <InputBase
                className={cls.input}
                sx={{ flex: 1 }}
                placeholder='Поиск…'
                inputProps={{ 'aria-label': 'Поиск' }}
            />
        </Paper>
    );
});
