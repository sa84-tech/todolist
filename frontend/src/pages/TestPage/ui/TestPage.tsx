import { memo } from 'react';
import cls from './TestPage.module.scss';
import { Counter } from '@/entities/Counter';
import { Container, Typography } from '@mui/material';

interface TestPageProps {
    className?: string;
}

export const TestPage = memo((props: TestPageProps) => {
    const { className } = props;

    return (
        <Container maxWidth="xl" className={className}>
            <Typography variant="h2" gutterBottom>
                Тестовая страница
            </Typography>
            <Counter />
        </Container>
    );
});
