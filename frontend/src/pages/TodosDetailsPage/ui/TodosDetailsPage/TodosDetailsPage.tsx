import { Button, Container, Grid } from '@mui/material';
import cls from './TodosDetailsPage.module.scss';
import { memo, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EditableTodosDetails } from '@/features/EditableTodosDetails';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface TodosDetailsPageProps {
    className?: string;
}

export const TodosDetailsPage = memo((props: TodosDetailsPageProps) => {
    const { className = '' } = props;
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate()

    const onBackClicked = useCallback(() => {
        navigate(RoutePath.todolist_details + id);
    }, [navigate]);
    
    return (
        <Container className={`${cls.TodosDetailsPage} ${className}`} maxWidth="xl" sx={{ py: 2}}>
            <Button onClick={onBackClicked}>Назад</Button>
            <Grid container spacing={2} sx={{ py: 3 }}>
                <EditableTodosDetails id={Number(id)} />
            </Grid>
        </Container>
    );
});
