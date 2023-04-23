import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { Todo } from '@/entities/Todo';
import { $api } from '@/shared/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTodosDetailsForm } from '../../selectors/editableTodoCardSelectors';

export const deleteTodo = createAsyncThunk<Todo, void, ThunkConfig<string>>(
    'editableTodoCard/deleteTodo',
    async (_, thunkApi) => {
        const { getState, rejectWithValue } = thunkApi;

        const formData = getTodosDetailsForm(getState());

        try {
            const response = await $api.delete<Todo>(`/todos/todo/${formData?.id}/`);

            if (!response.data) {
                throw new Error();
            }

            console.log("🚀 ~ file: deleteTodo.ts:27 ~ response.data:", response.data)
            return response.data;

        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
