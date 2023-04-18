import { CircularProgress, Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { Todo } from '../../model/types/TodoSchema';

interface TodoCardProps {
    className?: string;
    data?: Todo;
    readonly?: boolean;
    isLoading?: boolean;
    error?: string;
    onChangeTitle?: (value?: string) => void;
    onChangeContent?: (value?: string) => void;
    onChangeExecurtor?: (value?: string) => void;
    onChangeIsCompleted?: (value?: boolean) => void;
    onChangeIsActive?: (value?: boolean) => void;
}

export const TodoCard = memo((props: TodoCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        onChangeTitle,
        onChangeContent,
        onChangeExecurtor,
        onChangeIsCompleted,
        onChangeIsActive,
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
