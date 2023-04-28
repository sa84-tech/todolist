import { User } from '@/entities/User';
import AppAvatar from '@/shared/ui/AppAvatar/AppAvatar';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <IconButton id="basic-button" onClick={handleOpenUserMenu}>
                <AppAvatar firstName={user.firstName} lastName={user.lastName} />
            </IconButton>

            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
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
                <MenuItem
                    component={Link}
                    to="/profile"
                    onClick={handleCloseUserMenu}
                >
                    <Typography textAlign="center">Профиль</Typography>
                </MenuItem>
                <MenuItem
                    component={Link}
                    to="/admin"
                    onClick={handleCloseUserMenu}
                >
                    <Typography textAlign="center">Админка</Typography>
                </MenuItem>
                <MenuItem disabled>
                    <Typography textAlign="center">Выход</Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
};
