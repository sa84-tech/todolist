import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { BasicMenu } from '../BasicMenu/BasicMenu';
import LetterT from '@/shared/assets/letterT.svg';

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
    return (
        <AppBar
            position='static'
            color='default'
            elevation={0}
            sx={{
                borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            }}
        >
            <Container maxWidth='xl'>
                <Toolbar sx={{ justifyContent: 'left' }}>
                    <Typography
                        variant='h4'
                        component='a'
                        href='/'
                        noWrap
                        sx={{
                            mr: 3,
                            display: 'flex',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <LetterT />
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppLink sx={{ mr: 2 }} to='/'>
                            Главная
                        </AppLink>
                        <AppLink sx={{ mr: 2 }} to='/test'>
                            Тест
                        </AppLink>
                    </Box>

                    <BasicMenu user={testUser} />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
