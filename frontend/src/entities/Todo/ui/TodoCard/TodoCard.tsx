import { TodoFormData } from '@/features/EditableTodosDetails/model/types/editableTodosDetailsSchema';
import { CircularProgress, Grid, Typography } from '@mui/material';
import { memo } from 'react';

interface TodoCardProps {
    className?: string;
    data?: TodoFormData;
    readonly?: boolean;
    isLoading?: boolean;
    error?: string;
}

export const TodoCard = memo((props: TodoCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
    } = props;

    if (isLoading) {
        return (
            <Grid container className={className}>
                <CircularProgress />
            </Grid>
        );
    }

    if (error) {
        return (
            <Grid container className={className}>
                Ошибка
            </Grid>
        );
    }

    return (
        <>
            <Typography variant="h6" component="h2">
                Задача
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
                <strong>Название: </strong>
                {data?.title}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
                <strong>Описание: </strong> {data?.content}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
                <strong>Исполнитель: </strong>
                {data?.executor}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
                <strong>Статус: </strong>
                {data?.isCompleted ? 'Выполнена' : 'В работе'}
            </Typography>
        </>
    );
});
