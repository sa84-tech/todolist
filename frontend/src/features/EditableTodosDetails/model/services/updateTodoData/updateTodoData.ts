import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { Todolist } from '@/entities/Todolist';
import { $api } from '@/shared/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Todo } from '@/entities/Todo';
import { getTodosDetailsForm } from '../../selectors/editableTodoCardSelectors';

interface ApiResponse {
    count: number | null;
    next: string | null;
    previous: string | null;
    results: Todo;
}

export const updateTodoData = createAsyncThunk<ApiResponse, void, ThunkConfig<string>>(
    'editableTodoCard/updateTodoData',
    async (_, thunkApi) => {
        const { rejectWithValue, getState } = thunkApi;

        const formData = getTodosDetailsForm(getState());

        try {
            const response = await $api.put<ApiResponse>(`/todos/todo/${formData?.id}`, formData);

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
