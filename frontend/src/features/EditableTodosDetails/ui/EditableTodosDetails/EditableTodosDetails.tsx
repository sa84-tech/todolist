import { Todos } from '@/entities/Todo';
import { TodoCard } from '@/entities/Todo/ui/TodoCard/TodoCard';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { FormControlLabel, Grid, Switch, Typography } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    getTodosDetailsForm,
    getTodosDetailsIsLoading,
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

    if (!id) {
        return (
            <Grid
                className={`${cls.EditableTodoCard} ${className}`}
                justifyContent="space-between"
                container={true}
            >
                <Typography variant="h6" component="h2">
                    Проект не найден.
                </Typography>
            </Grid>
        );
    }

    const todoSwitchHandler = (id: number) => {
        dispatch(editableTodosDetailsActions.switchTodo(id));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    useEffect(() => {
        dispatch(fetchTodoData(id));
    }, [dispatch, id]);

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <Grid
            className={`${cls.EditableTodoCard} ${className}`}
            justifyContent="space-between"
            container={true}
        >
            <Grid item xs={12} md={7} sx={{ pr: 3 }} justifyContent="end">
                <Grid container justifyContent="space-between">
                    <Typography variant="h5">Список задач</Typography>
                    <FormControlLabel
                        control={
                            <Switch
                                {...label}
                                sx={{ mr: 2 }}
                                checked={checked}
                                onChange={handleChange}
                            />
                        }
                        label="Скрывать удаленные"
                        labelPlacement='start'
                    />
                </Grid>

                <Todos
                    isLoading={isLoading}
                    todos={todos}
                    todolistId={todos[0]?.todolistId}
                    onItemClickHandle={todoSwitchHandler}
                    hideDeleted={checked}
                />
            </Grid>
            <Grid item xs={12} mt={2} md={5} pl={3}>
                <TodoCard isLoading={isLoading} data={formData} />
                <EditableTodoCardControls />
            </Grid>
        </Grid>
    );
});
