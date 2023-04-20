import { User } from '@/entities/User';
import { TodoFormData } from '@/features/EditableTodosDetails/model/types/editableTodosDetailsSchema';
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

interface TodoFormProps {
    className?: string;
    data?: TodoFormData;
    participants?: User[];
    readonly?: boolean;
    isLoading?: boolean;
    error?: string;
    onChangeTitle?: (value?: string) => void;
    onChangeContent?: (value?: string) => void;
    onChangeExecurtor?: (value?: string) => void;
    onChangeIsCompleted?: (value?: boolean) => void;
}

export const TodoForm = memo((props: TodoFormProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        participants,
        onChangeTitle,
        onChangeContent,
        onChangeExecurtor,
        onChangeIsCompleted,
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
        [onChangeTitle],
    );

    const onChangeContentHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value || '';
            onChangeContent?.(value);
        },
        [onChangeContent],
    );

    const onChangeExecurtorHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value || '';
            onChangeExecurtor?.(value);
        },
        [onChangeExecurtor],
    );

    const onChangeIsCompletedHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
            console.log("🚀 ~ file: TodoForm.tsx:83 ~ TodoForm ~ value:", value)
            onChangeIsCompleted?.(value === 'on');
        },
        [onChangeIsCompleted],
    );

    return (
        <>
            <Typography variant="h6" component="h2">
                Задача
            </Typography>
            <TextField
                value={data?.title}
                onChange={onChangeTitleHandler}
                fullWidth
                label="Название"
                id="name"
                size="small"
                sx={{ mt: 2 }}
                required
            />
            <TextField
                value={data?.content}
                onChange={onChangeContentHandler}
                multiline
                maxRows={4}
                fullWidth
                label="Описание"
                id="content"
                size="small"
                sx={{ mt: 2 }}
                required
            />
            <TextField
                select
                label="Исполнитель"
                defaultValue={data?.executor}
                fullWidth
                sx={{ mt: 2 }}
                size="small"
                onChange={onChangeExecurtorHandler}
            >
                {participants ? (
                    participants?.map((user) => (
                        <MenuItem key={user.id} value={user.id}>
                            {user.fullName}
                        </MenuItem>
                    ))
                ) : (
                    <MenuItem key={data?.executor} value={data?.executor}>
                        {data?.executor}
                    </MenuItem>
                )}
            </TextField>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={data?.isCompleted}
                        onChange={onChangeIsCompletedHandler}
                        color="primary"
                    />
                }
                label="Выполнена"
            />
        </>
    );
});
