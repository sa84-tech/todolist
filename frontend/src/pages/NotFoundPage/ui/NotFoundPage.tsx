import { memo } from 'react';
import cls from './NotFoundPage.module.scss';
import { Box, Container, Typography } from '@mui/material';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = memo((props: NotFoundPageProps) => {
    const { className } = props;

    return (
        <Container maxWidth='xl'>
            <Box py={5}>
                <Typography variant='h2' gutterBottom>
                    Страница не найдена
                </Typography>
            </Box>
        </Container>
    );
});
