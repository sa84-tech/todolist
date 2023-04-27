import { Box, InputBase, Paper } from '@mui/material';
import { memo, useCallback } from 'react';
import cls from './SearchBar.module.scss';
import { Search as SearchIcon } from '@mui/icons-material';
import { common } from '@mui/material/colors';

interface SearchBarProps {
    className?: string;
    search: string;
    onChangeSearch: (search: string) => void;
}

export const SearchBar = memo((props: SearchBarProps) => {
    const { className, onChangeSearch, search } = props;

    const onChangeHandler = useCallback(
        (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            onChangeSearch(event.target.value);
        },
        [],
    );

    return (
        <Paper
            className={cls.SearchBar}
            component="form"
            variant="outlined"
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: 400,
                maxHeight: '40px',
            }}
        >
            <Box className={cls.iconWrapper} sx={{ display: 'flex', mr: 1, opacity: 0.3 }}>
                <SearchIcon />
            </Box>
            <InputBase
                className={cls.input}
                placeholder="Поиск…"
                inputProps={{ 'aria-label': 'Поиск' }}
                onChange={onChangeHandler}
                value={search}
            />
        </Paper>
    );
});
