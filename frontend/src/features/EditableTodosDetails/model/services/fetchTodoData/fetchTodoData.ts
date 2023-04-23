import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { $api } from '@/shared/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiTodosListResponse } from '../../types/editableTodosDetailsSchema';

export const fetchTodoData = createAsyncThunk<
    ApiTodosListResponse,
    number,
    ThunkConfig<string>
>('editableTodoCard/fetchTodoData', async (todolistId, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
        const response = await $api.get<ApiTodosListResponse>('/todos/todo', {
            params: {
                todolist: todolistId,
            },
        });

        if (!response.data) {
            throw new Error();
        }

        const data = {
            ...response.data,
            activeTodo: response.data.results.find((item) => item.isActive),
        };
        console.log("🚀 ~ file: fetchTodoData.ts:27 ~ > ~ response.data:", response.data)

        return data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
