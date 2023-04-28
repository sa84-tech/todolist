import { getUsersString } from '@/shared/lib/name/getFullName';
import { CircularProgress, Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { Todolist } from '../../model/types/todolist';

interface TodolistCardProps {
    className?: string;
    data?: Todolist;
    formState?: boolean;
    isLoading?: boolean;
    error?: string;
}

export const TodolistCard = memo((props: TodolistCardProps) => {
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
            <>
                <Typography variant="h4" component="h5" sx={{ mb: 2 }}>
                    <strong>Произошла ошибка при загрузке данных.</strong>
                </Typography>
                <Typography variant="h5" component="h5" sx={{ my: 2 }}>
                    Попробуйте обновить страницу
                </Typography>
            </>
        );
    }

    return (
        <>
            <Typography variant="h4">
                <strong>Название:</strong> {data?.title}
            </Typography>
            <Typography variant="body1" sx={{ mt: 4 }}>
                <strong>Описание:</strong> {data?.details}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
                <strong>Изображение: </strong>{data?.previewImage}
                {/* <Typography variant="inherit">{data?.previewImage}</Typography> */}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
                <strong>Статус:</strong> {data?.isCompleted ? 'Выполнен' : 'В работе'}
            </Typography>

            <Typography variant="body1" sx={{ mt: 3 }}>
                <strong>Команда:</strong> {getUsersString(data?.participants)}
            </Typography>
        </>
    );
});
