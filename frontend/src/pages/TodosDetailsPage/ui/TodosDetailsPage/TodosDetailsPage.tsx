import { Container, Grid } from '@mui/material';
import cls from './TodosDetailsPage.module.scss';
import { memo } from 'react';
import { EditableTodoCard } from '@/features/EditableTodoCard';
import { useParams } from 'react-router-dom';

interface TodosDetailsPageProps {
    className?: string;
}

export const TodosDetailsPage = memo((props: TodosDetailsPageProps) => {
    const { className='' } = props;
    const { id } = useParams<{ id: string }>();

    return (
        <Container
            className={`${cls.TodosDetailsPage} ${className}`}
            maxWidth='xl'
            sx={{ py: 5 }}
        >
            <Grid container spacing={2} sx={{ py: 3 }}>
                <EditableTodoCard id={Number(id)} />
            </Grid>
        </Container>
    );
});
