import AppAvatar from '@/shared/ui/AppAvatar/AppAvatar';
import {
    Box,
    IconButton,
    Menu,
    MenuItem,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// FOR TEST
interface User {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    isStaff: boolean;
    isSuperuser: boolean;
}

export const BasicMenu = (props: { user: User }) => {
    const { user } = props;
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <IconButton id='basic-button' onClick={handleOpenUserMenu}>
                <AppAvatar
                    firstName={user.firstName}
                    lastName={user.lastName}
                />
            </IconButton>

            <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu} disabled>
                    <Typography textAlign='center'>Профиль</Typography>
                </MenuItem>
                <MenuItem
                    component={Link}
                    to='/users'
                    onClick={handleCloseUserMenu}
                >
                    <Typography textAlign='center'>Пользователи</Typography>
                </MenuItem>
                <MenuItem>
                    <Typography textAlign='center'>Выход</Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
};
