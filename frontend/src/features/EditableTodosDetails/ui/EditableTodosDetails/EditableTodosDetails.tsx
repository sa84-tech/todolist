import { Todos } from '@/entities/Todo';
import { TodoCard } from '@/entities/Todo/ui/TodoCard/TodoCard';
import { TodoForm } from '@/entities/Todo/ui/TodoForm/TodoForm';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Grid, Typography } from '@mui/material';
import { memo, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    getTodosDetailsForm,
    getTodosDetailsIsLoading,
    getTodosDetailsTodolist,
    getTodosDetailsformState,
} from '../../model/selectors/editableTodoCardSelectors';
import { fetchTodoData } from '../../model/services/fetchTodoData/fetchTodoData';
import { updateTodoData } from '../../model/services/updateTodoData/updateTodoData';
import {
    editableTodosDetailsActions,
    getTodos,
} from '../../model/slices/editableTodosDetailsSlice';
import { EditableTodoCardControls } from '../EditableTodoCardControls/EditableTodoCardControls';
import { EditableTodosDetailsHeader } from '../EditableTodosDetailsHeader/EditableTodosDetailsHeader';
import cls from './EditableTodosDetails.module.scss';

interface EditableTodosDetailsProps {
    className?: string;
    todolistId?: number;
    todoId?: number;
}

export const EditableTodosDetails = memo((props: EditableTodosDetailsProps) => {
    const { className, todolistId, todoId } = props;
    const dispatch = useAppDispatch();
    const todos = useSelector(getTodos.selectAll);
    const isLoading = useSelector(getTodosDetailsIsLoading);
    const formData = useSelector(getTodosDetailsForm);
    const todolist = useSelector(getTodosDetailsTodolist);

    const [deletedChecked, setDeletedChecked] = useState(false);
    const [completedChecked, setCompletedChecked] = useState(true);

    const formState = useSelector(getTodosDetailsformState);

    if (!todolistId) {
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
        dispatch(fetchTodoData({ todolistId, todoId }));
    }, [dispatch, todolistId, todoId]);

    useEffect(() => {
        if (formState === 'create') {
            dispatch(
                editableTodosDetailsActions.updateTodo({
                    title: '',
                    content: '',
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
            const participants = todolist?.participants;
            const newExecutor = participants?.find(
                (user) => user.id === userId
            );
            dispatch(
                editableTodosDetailsActions.updateTodo({
                    executor: newExecutor,
                })
            );
        },
        [dispatch, todolist]
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

    const onTodoRestore = useCallback(() => {
        dispatch(
            editableTodosDetailsActions.updateTodo({
                isActive: true,
            })
        );
        dispatch(updateTodoData());
    }, [dispatch]);

    return (
        <Grid
            className={`${cls.EditableTodoCard} ${className}`}
            justifyContent='space-between'
            container={true}
        >
            <Grid item xs={12} md={7} sx={{ pr: 3 }} justifyContent='end'>
                <EditableTodosDetailsHeader
                    deletedChecked={deletedChecked}
                    completedChecked={completedChecked}
                    setDeletedChecked={setDeletedChecked}
                    setCompletedChecked={setCompletedChecked}
                />

                <Todos
                    isLoading={isLoading}
                    todos={todos}
                    onItemClickHandle={todoDisplayHandler}
                    showDeleted={deletedChecked}
                    showCompleted={completedChecked}
                />
            </Grid>
            <Grid item xs={12} mt={2} md={5} pl={3}>
                {formState === 'default' ? (
                    <TodoCard isLoading={isLoading} data={formData} />
                ) : (
                    <TodoForm
                        isLoading={isLoading}
                        data={formData}
                        participants={todolist?.participants}
                        onChangeTitle={onChangeTitle}
                        onChangeContent={onChangeContent}
                        onChangeExecutor={onChangeExecutor}
                        onChangeIsCompleted={onChangeIsCompleted}
                    />
                )}
                <EditableTodoCardControls
                    formState={formState}
                    isTodoActive={formData?.isActive}
                    onRestore={onTodoRestore}
                />
            </Grid>
        </Grid>
    );
});
