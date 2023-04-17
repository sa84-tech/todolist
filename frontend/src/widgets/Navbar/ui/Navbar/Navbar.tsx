import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import { BasicMenu } from '../BasicMenu/BasicMenu';
import ToDo from '@/shared/assets/todo_sm.svg';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';

// FOR TEST
const testUser = {
    id: 1,
    username: 'admin',
    email: 'admin@example.com',
    firstName: 'Александр',
    lastName: 'Матросов',
    isStaff: true,
    isSuperuser: true,
};

export const Navbar = () => {
    const user = useSelector(getUserAuthData);

    if (!user) {
        return null;
    }

    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{
                borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            }}
        >
            <Container maxWidth="xl">
                <Toolbar sx={{ justifyContent: 'left' }}>
                    <AppLink to='/'>
                        <ToDo />
                    </AppLink>
                    <Box ml={4} sx={{ flexGrow: 1 }}>
                        <AppLink sx={{ mr: 2 }} to="/">
                            Главная
                        </AppLink>
                        <AppLink sx={{ mr: 2 }} to="/test">
                            Тест
                        </AppLink>
                    </Box>

                    <BasicMenu user={user} />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
