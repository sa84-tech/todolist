import { User } from '@/entities/User';
import {
    Checkbox,
    CircularProgress,
    FormControlLabel,
    Grid,
    MenuItem,
    TextField,
    Typography,
} from '@mui/material';
import { memo, useCallback } from 'react';
import { TodolistFormData } from '../../model/types/todolist';

interface TodolistFormProps {
    className?: string;
    data?: TodolistFormData;
    participants?: User[];
    readonly?: boolean;
    isLoading?: boolean;
    error?: string;
    onChangeTitle?: (value?: string) => void;
    onChangeContent?: (value?: string) => void;
    onChangeExecutor?: (value?: string) => void;
    onChangeIsCompleted?: (value?: boolean) => void;
    onChangePreviewImage?: (value?: string) => void;
}

export const TodolistForm = memo((props: TodolistFormProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        participants,
        onChangeTitle,
        onChangeContent,
        onChangeExecutor,
        onChangeIsCompleted,
        onChangePreviewImage,
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

    const onChangeTitleHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value || '';
            onChangeTitle?.(value);
        },
        [onChangeTitle]
    );

    const onChangeContentHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value || '';
            onChangeContent?.(value);
        },
        [onChangeContent]
    );

    const onChangeExecurtorHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value || '';
            onChangeExecutor?.(value);
        },
        [onChangeExecutor]
    );

    const onChangeIsCompletedHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
            onChangeIsCompleted?.(value === 'true');
        },
        [onChangeIsCompleted]
    );

    return (
        <>
            <Typography variant='h6' component='h2'>
                Задача
            </Typography>

            <TextField
                value={data?.title}
                onChange={onChangeTitleHandler}
                fullWidth
                label='Название'
                id='name'
                size='small'
                sx={{ mt: 2 }}
                required
            />

            <TextField
                value={data?.details}
                onChange={onChangeContentHandler}
                multiline
                maxRows={4}
                fullWidth
                label='Описание'
                id='content'
                size='small'
                sx={{ mt: 2 }}
                required
            />

            {/* <TextField
                select
                label='Исполнитель'
                // defaultValue={data?.executor?.fullName}
                value={data?.executor?.id}
                fullWidth
                sx={{ mt: 2 }}
                size='small'
                onChange={onChangeExecurtorHandler}
            >
                {participants ? (
                    participants?.map((user) => (
                        <MenuItem
                            key={user.id}
                            value={user.id}
                        >
                            {user.fullName}
                        </MenuItem>
                    ))
                ) : (
                    <MenuItem
                        key={data?.executor?.id}
                        value={data?.executor?.id}
                    >
                        {data?.executor?.fullName}
                    </MenuItem>
                )}
            </TextField> */}

            <FormControlLabel
                control={
                    <Checkbox
                        checked={data?.isCompleted}
                        onChange={onChangeIsCompletedHandler}
                        color='primary'
                        value={data?.isCompleted}
                    />
                }
                label='Выполнена'
            />
        </>
    );
});
