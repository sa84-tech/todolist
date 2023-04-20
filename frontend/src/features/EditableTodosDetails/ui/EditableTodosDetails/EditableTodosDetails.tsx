import { Todos } from '@/entities/Todo';
import { TodoCard } from '@/entities/Todo/ui/TodoCard/TodoCard';
import { TodoForm } from '@/entities/Todo/ui/TodoForm/TodoForm';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { FormControlLabel, Grid, Switch, Typography } from '@mui/material';
import { memo, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    getTodosDetailsForm,
    getTodosDetailsIsLoading,
    getTodosDetailsformState,
} from '../../model/selectors/editableTodoCardSelectors';
import { fetchTodoData } from '../../model/services/fetchTodoData/fetchTodoData';
import {
    editableTodosDetailsActions,
    getTodos,
} from '../../model/slices/editableTodosDetailsSlice';
import { EditableTodoCardControls } from '../EditableTodoCardControls/EditableTodoCardControls';
import cls from './EditableTodosDetails.module.scss';

interface EditableTodosDetailsProps {
    className?: string;
    id?: number;
}

export const EditableTodosDetails = memo((props: EditableTodosDetailsProps) => {
    const { className, id } = props;
    const dispatch = useAppDispatch();
    const todos = useSelector(getTodos.selectAll);
    const isLoading = useSelector(getTodosDetailsIsLoading);
    const formData = useSelector(getTodosDetailsForm);
    const [checked, setChecked] = useState(true);

    const formState = useSelector(getTodosDetailsformState);

    if (!id) {
        return (
            <Grid
                className={`${cls.EditableTodoCard} ${className}`}
                justifyContent='space-between'
                container={true}
            >
                <Typography variant='h6' component='h2'>
                    Проект не найден.
                </Typography>
            </Grid>
        );
    }

    useEffect(() => {
        dispatch(fetchTodoData(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (formState === 'create') {
            dispatch(
                editableTodosDetailsActions.updateTodo({
                    title: '',
                    content: '',
                    // executor: '',
                    isCompleted: false,
                })
            );
        }
    }, [dispatch, formState]);

    const todoDisplayHandler = useCallback(
        (id: number) => {
            dispatch(editableTodosDetailsActions.displayTodo(id));
        },
        [dispatch]
    );

    const switchChangeHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setChecked(event.target.checked);
        },
        [dispatch]
    );

    // Form fields
    const onChangeTitle = useCallback(
        (value?: string) => {
            dispatch(
                editableTodosDetailsActions.updateTodo({ title: value || '' })
            );
        },
        [dispatch]
    );

    const onChangeContent = useCallback(
        (value?: string) => {
            dispatch(
                editableTodosDetailsActions.updateTodo({ content: value || '' })
            );
        },
        [dispatch]
    );

    const onChangeExecutor = useCallback(
        (value?: string) => {
            const userId = Number(value);
            const participants = formData?.todolist?.participants;
            const fullName = participants?.find(
                (user) => user.id == userId
            )?.fullName;
            dispatch(
                editableTodosDetailsActions.updateTodo({
                    executor: { id, fullName },
                })
            );
        },
        [dispatch]
    );

    const onChangeIsCompleted = useCallback(
        (value?: boolean) => {
            dispatch(
                editableTodosDetailsActions.updateTodo({
                    isCompleted: !value || false,
                })
            );
        },
        [dispatch]
    );

    return (
        <Grid
            className={`${cls.EditableTodoCard} ${className}`}
            justifyContent='space-between'
            container={true}
        >
            <Grid item xs={12} md={7} sx={{ pr: 3 }} justifyContent='end'>
                <Grid container justifyContent='space-between'>
                    <Typography variant='h5'>Список задач</Typography>
                    <FormControlLabel
                        control={
                            <Switch
                                sx={{ mr: 2 }}
                                checked={checked}
                                onChange={switchChangeHandler}
                            />
                        }
                        label='Скрывать удаленные'
                        labelPlacement='start'
                    />
                </Grid>

                <Todos
                    isLoading={isLoading}
                    todos={todos}
                    todolistId={todos[0]?.todolist?.id}
                    onItemClickHandle={todoDisplayHandler}
                    hideDeleted={checked}
                />
            </Grid>
            <Grid item xs={12} mt={2} md={5} pl={3}>
                {formState === 'default' ? (
                    <TodoCard isLoading={isLoading} data={formData} />
                ) : (
                    <TodoForm
                        isLoading={isLoading}
                        data={formData}
                        participants={formData?.todolist?.participants}
                        onChangeTitle={onChangeTitle}
                        onChangeContent={onChangeContent}
                        onChangeExecutor={onChangeExecutor}
                        onChangeIsCompleted={onChangeIsCompleted}
                    />
                )}
                <EditableTodoCardControls formState={formState} />
            </Grid>
        </Grid>
    );
});
