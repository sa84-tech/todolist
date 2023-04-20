import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { Todolist } from '@/entities/Todolist';
import { $api } from '@/shared/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Todo } from '@/entities/Todo';
import { getTodosDetailsForm } from '../../selectors/editableTodoCardSelectors';

export const updateTodoData = createAsyncThunk<Todo, void, ThunkConfig<string>>(
    'editableTodoCard/updateTodoData',
    async (_, thunkApi) => {
        const { rejectWithValue, getState } = thunkApi;

        const formData = getTodosDetailsForm(getState());

        const requestData = {
            id: formData?.id,
            title: formData?.title,
            content: formData?.content,
            todolist: formData?.todolist?.id,
            executor: formData?.executor?.id,
        }

        try {
            const response = await $api.put<Todo>(`/todos/todo/${formData?.id}/`, requestData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
