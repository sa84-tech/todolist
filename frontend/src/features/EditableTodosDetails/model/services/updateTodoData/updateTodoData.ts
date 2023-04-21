import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { $api } from '@/shared/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Todo } from '@/entities/Todo';
import { getTodosDetailsForm, getTodosDetailsTodolist } from '../../selectors/editableTodoCardSelectors';

interface ApiResponse extends Omit<Todo, 'executor'> {
    executor: number
}

export const updateTodoData = createAsyncThunk<Todo, void, ThunkConfig<string>>(
    'editableTodoCard/updateTodoData',
    async (_, thunkApi) => {
        const { rejectWithValue, getState } = thunkApi;

        const formData = getTodosDetailsForm(getState());

        const requestBody = {
            title: formData?.title,
            content: formData?.content,
            todolist: formData?.todolist,
            executor: formData?.executor?.id,
            isCompleted: formData?.isCompleted,
        }

        try {
            const response = await $api.put<ApiResponse>(`/todos/todo/${formData?.id}/`, requestBody);

            if (!response.data) {
                throw new Error();
            }

            const todolist = getTodosDetailsTodolist(getState());
            const executor = response.data.executor;
            const data = {
                ...response.data,
                executor: todolist?.participants?.find(user => user.id === executor)
            }
            return data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
